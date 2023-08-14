import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/models/register.model';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent implements OnInit{
 
  constructor(private service: RegisterServiceService){}

   reg : RegisterModel;
 
  
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

  }
