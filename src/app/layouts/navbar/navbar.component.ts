import { Component, OnInit } from '@angular/core';
import { LoginClubService } from 'src/app/services/login-club.service';
import { LoginUserService } from 'src/app/services/login-user.service';
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public _authUser: LoginUserService,public _authClub :LoginClubService){}
  ngOnInit(): void {
    
  }

}
