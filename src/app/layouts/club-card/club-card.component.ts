import { Component, Input } from '@angular/core';
import { Club } from 'src/app/model/Club';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.css']
})
export class ClubCardComponent {
  @Input() club!: Club 

}
