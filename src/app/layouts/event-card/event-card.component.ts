import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from 'src/app/model/Event';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input()  event!:Event;
  @Output() selectedEvent=new EventEmitter<Event>();
  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    }
    selectPersonne(){
      this.selectedEvent.emit(
        this.event
      );
    }
    detail() {
      const link=['events', this.event.id];
      this.router.navigate(link);
    }
}
