import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserService } from 'src/app/services/login-user.service';

@Injectable({
  providedIn: 'root'
})


export class LoginClubService {

  constructor(private http:HttpClient) {  }

   private url='http://localhost:3000/users' ;

  onSignUpClub(club: any){
    return this.http.post(this.url ,club);
  }

  onLoginClub(club: any){
    return this.http.post(this.url +'/login',club);
  }


  isLoggedInClub(){

    let token =localStorage.getItem('token');
    if(token){
      return true ;
    }else{
      return false;
    }

  }


  
getClubDataFromToken(){

  let token =localStorage.getItem('token');
  if(token){
    let data=JSON.parse(window.atob(token.split('.')[1]))
    return data; 

  }

}



}

