import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/models/register.model';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent implements OnInit{
 
  constructor(){}

  reg: RegisterModel = new RegisterModel;
  
  userFrom = new FormGroup({
    Email:new FormControl('',Validators.required),
    UserName:new FormControl('',Validators.required),
    PasswordHash:new FormControl('',[Validators.required,Validators.minLength(6)]),
    RepeatPasswordHash:new FormControl('',[Validators.required])
  });

  onRegister(){
    console.log(this.userFrom);
    console.warn(this.userFrom.value);
  }



  ngOnInit(): void {
    
  }

}
