import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { user } from '../models/user';


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

    getById(reg : LoginModel):Observable<user[]>{
      return this.http.get<user[]>(this.baseUrl + 'get-by-id' + reg.Email).pipe();
    }

    LogoutUser(){
      return this.http.get(this.baseUrl + 'Logout').pipe();
    }
}
