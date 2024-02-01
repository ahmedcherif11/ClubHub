import { Component,Input } from '@angular/core';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})



export class SinglePostComponent {


  @Input()  post!:post;

  isLiked: boolean = false;
  likeCount: number = 100;

  constructor(private postService : PostService) {
    
  }



  addLike() {
    this.isLiked = !this.isLiked;
    this.postService.addlike(this.post.id).subscribe(
      (response) => {
        console.log("like added");
        window.location.reload();

      },
      (error) => {
        console.log("error");
      }
    );
  }

}
