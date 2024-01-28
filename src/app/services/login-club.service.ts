import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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


 




}
