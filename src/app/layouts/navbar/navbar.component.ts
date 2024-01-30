import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginClubService } from 'src/app/services/login-club.service';
import { LoginUserService } from 'src/app/services/login-user.service';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private _authUser: LoginUserService,private _authClub :LoginClubService){}

  public isLoggedInClub(): boolean {
    return this._authClub.isLoggedInClub();
  }
  public isLoggedInUser(): boolean {
    return this._authUser.isLoggedInUser();
  }
  public ClubId(): number {
    return this._authClub.getClubIDFromToken();
  }

  ngOnInit(): void {

  }
   

  logout(){
   localStorage .removeItem('token');

  }






}