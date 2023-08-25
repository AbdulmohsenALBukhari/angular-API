import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { user } from 'src/app/models/user';
import { loginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // service the login
  constructor(private service:loginServiceService,private router: Router){}

  ngOnInit(): void {
    // index farst value modfiy
    this.log={
      Email:'',
      PasswordHash:'',
      RememberMe:false
    };
  }

  // log model
  log : LoginModel;
  user : user[]; 

  userForm = new FormGroup({
    Email:new FormControl('',Validators.required),// take value form html with if 
    PasswordHash:new FormControl('',Validators.required),
    RememberMe:new FormControl(false)
  })

  onLogin(){
    console.log(this.userForm);

    if(this.userForm.valid){ // chack if filed is valid or not
      this.validateLoginModel(); // inster input in value log model 
      this.service.Login(this.log).subscribe(success => {
        const Remember = !!this.userForm.value.RememberMe!;
        const day = new Date();
        if(Remember){
          day.setDate(day.getDate() + 15);
        }else{
          day.setMinutes(day.getMinutes() + 35);
        }
        localStorage.setItem('emailKey',this.userForm.value.Email!);
        localStorage.setItem('expire',day.toString());

        this.service.GetRoleName(this.userForm.value.Email!).subscribe(succ =>{
          localStorage.setItem('role',succ.toString());

        },err=> console.log(err));

        this.router.navigate(['home'])
      });
    }else{
      console.warn(this.log);
    } 
  }  

  validateLoginModel(){
    this.log.Email = this.userForm.value.Email!; // insert value in model
    this.log.PasswordHash = this.userForm.value.PasswordHash!;
    this.log.RememberMe = this.userForm.value.RememberMe!;
  }

  getById(){
    this.service.getById(this.log).subscribe(list =>{
      this.user = list;
      console.warn(this.user);
    },err => alert(err.error))
  }

}
