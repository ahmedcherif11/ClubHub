import { Component,Input } from '@angular/core';
import { post } from 'src/app/model/post';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})



export class SinglePostComponent {


  @Input()  post!:post;

  isLiked: boolean = false;
  likeCount: number = 100;

  constructor() {
    
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? 1 : -1;
  }







}
