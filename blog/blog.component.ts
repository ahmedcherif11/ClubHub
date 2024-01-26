import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';





@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{


  posts: post[];

  constructor(private postService: PostService) {
    this.posts = [];
  }


  ngOnInit():void{
    this.posts=this.postService.getPosts();
  }




/*
  post={
    clubname:"",
    text:"",
  }


  create(){
   this.posts.push(this.post);
   
   this.post={
    clubname:"",
    text:"",
  }
   
console.log(this.post);

  }
*/






 }






