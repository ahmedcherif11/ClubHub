import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:HttpClient) {  }


    //url backend
   private url='http://localhost:3000/users' ;

  onSignUp(user: any){
    return this.http.post(this.url ,user);
  }

  onLogin(user: any){
    return this.http.post(this.url +'/login',user);
  }


 
}