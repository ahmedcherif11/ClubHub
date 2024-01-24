import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/Event';
import { ServiceeventService } from 'src/app/services/serviceevent.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
   events: Event[];

  constructor(private eventservice: ServiceeventService) {
    this.events = [];
  }

  ngOnInit(): void {
    this.events=this.eventservice.getEvents();
    
  }
}
