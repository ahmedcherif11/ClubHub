import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CreatePostService } from 'src/app/services/create-post.service';
import { LoginClubService } from 'src/app/services/login-club.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  post: any={
    clubname:'',
    text:'',
   
  }

  constructor(private _post : CreatePostService,private _authClub: LoginClubService, private router:Router){}
  
  ngOnInit(): void { const clubData = this._authClub.getClubDataFromToken();
    if (clubData) {
      this.post.clubname = clubData.clubname;}// Assign the clubname from token
  }

  create(){

  
    this._post.create(this.post) 
   
    .subscribe(
      res=>{
        this.router.navigate(['/blog'])
      },

      err=>{
        console.log(err);
      }
    )
  }

  




}
