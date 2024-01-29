import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/model/post';
import { LoginClubService } from 'src/app/services/login-club.service';
import { PostService } from 'src/app/services/post.service';





@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{


  posts: post[];

  constructor(private postService: PostService, private _authClub: LoginClubService) {


    this.posts = [];
  }
  public isLoggedInClub(): boolean {
    return this._authClub.isLoggedInClub();
  }

  ngOnInit():void{
    this.refreshPosts();
  }
    
refreshPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    });
  }

    }
