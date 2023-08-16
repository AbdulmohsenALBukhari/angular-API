import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
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
      PasswordHash:''
    };
  }

  // log model
  log : LoginModel;

  userForm = new FormGroup({
    Email:new FormControl('',Validators.required),// take value form html with if 
    PasswordHash:new FormControl('',Validators.required)
  })

  onLogin(){
    console.log(this.userForm);

    if(this.userForm.valid){ // chack if filed is valid or not
      this.validateLoginModel(); // inster input in value log model 
      this.service.Login(this.log).subscribe();
    }else{
      console.warn(this.log);
    }
  }  

  validateLoginModel(){
    this.log.Email = this.userForm.value.Email!; // insert value in model
    this.log.PasswordHash = this.userForm.value.PasswordHash!;
  }

}
