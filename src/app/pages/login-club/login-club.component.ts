import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginClubService } from 'src/app/services/login-club.service';




@Component({
  selector: 'app-login-club',
  templateUrl: './login-club.component.html',
  styleUrls: ['./login-club.component.css'],
})

export class LoginClubComponent implements OnInit {

  club={
    clubname:'',
    creationdate:'',
    university: '',
    field: '',
    username: '',
    password: ''
  }

  club_log={
    username: '',
    password: '',
  }

  loginClubFailed: boolean = false;
  signupClubFailed: boolean = false;
  currentForm: string = 'signInClub';




constructor(private _club: LoginClubService,private router : Router,private toastr: ToastrService,) {}
 
 ngOnInit(): void {}




  token:any;

  onLoginClub(){

    this._club.onLoginClub(this.club_log)
    .subscribe(
      res=>{
  
        this.token = res;
        localStorage.setItem('token' , this.token.access_token)
        this.router.navigate(['/home']);
  
      },
      err=>{
        console.log(err);
        
      }
    );
    this.loginClubFailed = true;
  
  }



  onSignUpClub() {
       
    this._club.onSignUpClub(this.club)
    .subscribe(
      res=>{
        this.toastr.success('Club added successfully');
        this.router.navigate(['/clublogin']);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
      },
      err=>{
        this.toastr.error('Error while adding club');
        console.log(err);
      }
    );
    this.signupClubFailed = true;
    }
  

    showSignInClubForm() {
      this.currentForm = 'signInClub';
     
    }
  
    showSignUpClubForm() {
      this.currentForm = 'signUpClub';
    
    }




  
}













