import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})

export class loginServiceService{

    constructor(private http:HttpClient){}

    
  baseUrl = 'http://localhost:5140/api/Account/';
 
   
   headers= new HttpHeaders()
    .set('content-type', 'application/json');

    Login(reg : LoginModel):Observable<LoginModel>{
        return this.http.post<LoginModel>(this.baseUrl + 'Login', reg,{'headers':this.headers}).pipe();
    }
}
