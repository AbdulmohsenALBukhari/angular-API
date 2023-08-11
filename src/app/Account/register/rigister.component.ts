import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rigister',
  templateUrl: './rigister.component.html',
  styleUrls: ['./rigister.component.css']
})
export class RigisterComponent {
 
  constructor(){}

  
  userFrom = new FormGroup({
    Email:new FormControl(''),
    UserName:new FormControl(''),
    PasswordHash:new FormControl(''),
    RepeatPasswordHash:new FormControl('')
  });

  onRegister(){
    console.warn(this.userFrom.value);
  }
}
