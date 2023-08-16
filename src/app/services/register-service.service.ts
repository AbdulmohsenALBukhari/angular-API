import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {


  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5140/api/Account/';
 
   
   headers= new HttpHeaders()
    .set('content-type', 'application/json');

  Register(reg : RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.baseUrl + 'Rigister', reg, {'headers':this.headers}).pipe();
  }

  getAllUser():Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl + 'GetAllUserAsync');
  }

}
