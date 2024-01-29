import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

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
    if(token ){
      const decodedToken = jwt_decode.jwtDecode(token) as { [key: string]: string }; 
      const role = decodedToken['role']; 
      return role === 'user';
    }else{
      return false;
    }

  }



getUserDataFromToken(){

  let token =localStorage.getItem('token');
  if(token){
    const decodedToken = jwt_decode.jwtDecode(token) as { [key: string]: string }; 
    return decodedToken ; 

  }return null;


}




 
}