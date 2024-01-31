import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/Event';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { ServiceeventService } from 'src/app/services/serviceevent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {



  events: Event[];
  posts: post[] ;



 constructor(private eventservice: ServiceeventService, private postservice :PostService) {
   this.events = [];
   this.posts = [];
 }

 ngOnInit(): void {
  this.eventservice.getLatestEvents().subscribe(
     (events) => {
       this.events = events;
       console.log(events);
     },
     (erreur) => {
      alert(`Problème de connexions les donnèes sont fictives :(`);
     }
   );

   this.postservice.getLatestPosts().subscribe(
    (posts) => {
      this.posts = posts;
      console.log(posts);
    },
    (erreur) => {
     alert(`Problème de connexions `);
    }
  );




 }
 
}
