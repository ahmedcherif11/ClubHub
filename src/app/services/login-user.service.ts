import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:HttpClient) {  }

   private url='http://localhost:3000/users' ;

  onSignUp(user: any){
    return this.http.post(this.url ,user);
  }

  onLogin(user: any){
    return this.http.post(this.url +'/login',user);
  }

  isLoggedInUser(){

    let token =localStorage.getItem('token');
    if(token){
      return true ;
    }else{
      return false;
    }
  }

getUserDataFromToken(){

  let token =localStorage.getItem('token');
  if(token){
    let data=JSON.parse(window.atob(token.split('.')[1]))
    return data; 

  }


}




 
}