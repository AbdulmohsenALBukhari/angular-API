import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/models/register.model';
import { user } from 'src/app/models/user';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent implements OnInit{
 
  constructor(private service: RegisterServiceService){}

  reg : RegisterModel;
  user : user[]; 
  
  userFrom = new FormGroup({
    Email:new FormControl('',Validators.required),
    UserName:new FormControl('',Validators.required),
    PasswordHash:new FormControl('',[Validators.required,Validators.minLength(6)]),
  });

  ngOnInit(): void {
    this.reg={
      UserName: '',
      Email: '',
      PasswordHash: ''
    };
    //this.getAllUser();
  }

  onRegister(){
    console.log(this.userFrom);    
    if (this.userFrom.valid) 
    this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(succes =>{
        alert('goooood');
      },error => console.log(error));
    }
    
  validateRegisterModel() {
    this.reg.UserName = this.userFrom.value.UserName!;
    this.reg.Email = this.userFrom.value.Email!;
    this.reg.PasswordHash = this.userFrom.value.PasswordHash!;
  }

  getAllUser(){
    this.service.getAllUser().subscribe(list =>{
      this.user = list;
      console.warn(this.user);
    },err => alert(err.error))
  }

  isEmailExist(em: string){
    for(const name of this.user){
      if(name.Email ===  em){
        console.log('email exist');
        return true;
      }
    }
    return false;
  }

  isUserNameExist(UserName: string){
    for(const name of this.user){
      if(name.UserName ===  UserName){
        console.log('User Name exist');
        return true;
      }
    }
    return false;
  }

  }
