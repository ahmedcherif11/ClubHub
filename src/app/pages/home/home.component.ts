import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/Event';
import { ServiceeventService } from 'src/app/services/serviceevent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[];

 constructor(private eventservice: ServiceeventService) {
   this.events = [];
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
 }
}
