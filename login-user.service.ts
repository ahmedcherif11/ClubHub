import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:HttpClient) {  }


    //url backend
   private url=''

  onSignUp(user: any){
    return this.http.post(this.url + 'onSignUp',user);
  }

  onLogin(user: any){
    return this.http.post(this.url + 'onLogin',user);
  }


 
}
