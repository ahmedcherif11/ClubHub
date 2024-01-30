import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { LoginClubService } from 'src/app/services/login-club.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  post: any={
 
    text:'',
    createAt:new Date(),
   
  }

  constructor(private _post : PostService,private _authClub: LoginClubService, private router:Router){}
  
  ngOnInit(): void {  
  }

  create() {
    this._post.create(this.post)
      .subscribe(
        (createdPost) => {
          console.log('Post created successfully:', createdPost);
          
 
          this.router.navigate(['/blog']);
        },
        (err) => {
          console.error('Error creating post:', err);

        }
      );
  }




}
