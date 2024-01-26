import { Component , OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';

import { post } from 'src/app/model/post';
import { CreatePostService } from 'src/app/services/create-post.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  post: any={
    clubname :'',
    text:'',
   
  }

  constructor(private _post : CreatePostService, private router:Router){}
  ngOnInit(): void {
  }

  create(){
    let fd = new FormData()
    fd.append('clubname',this.post.clubname)
    fd.append('lastname',this.post.text)
    
    this._post.create(fd)
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
