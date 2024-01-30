import { Component, Input ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/Event';

@Component({
  selector: 'app-minieventcard',
  templateUrl: './minieventcard.component.html',
  styleUrls: ['./minieventcard.component.css']
})
export class MinieventcardComponent {
  @Input() event!: Event ;
  constructor( private router: Router) {}
  ngOnInit(): void {
  console.log(this.event);
  }
  detail() {
    console.log(this.event.id);
    const link=['event', this.event.id];
    this.router.navigate(link);
    
  }

}
