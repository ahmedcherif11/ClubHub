import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as jwt_decode from 'jwt-decode'



@Injectable({
  providedIn: 'root'
})


export class LoginClubService {

  constructor(private http:HttpClient) {  }

   private url='http://localhost:3000/club' ;

  onSignUpClub(club: any){
    return this.http.post(this.url ='/signup',club);
  }

  onLoginClub(club: any){
    return this.http.post(this.url +'/login',club);
  }


  isLoggedInClub(){

    let token =localStorage.getItem('token');
    if(token ){
      const decodedToken = jwt_decode.jwtDecode(token) as { [key: string]: string }; 
      const role = decodedToken['role']; 
      return role === 'club';
    }else{
      return false;
    }

  }
getClubDataFromToken(){

  let token =localStorage.getItem('token');
  if(token){
    const decodedToken = jwt_decode.jwtDecode(token) as { [key: string]: string }; 
    return decodedToken ; 

  }return null;


}
getClubIDFromToken(): any {

  let token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwt_decode.jwtDecode(token) as { [key: string]: string };
    return decodedToken['id'];

  }
  return null;
}



}

