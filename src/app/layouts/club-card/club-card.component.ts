import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/model/Club';

@Component({
  selector: 'app-club-card',
  templateUrl: './club-card.component.html',
  styleUrls: ['./club-card.component.css']
})
export class ClubCardComponent {
  @Input() club!: Club ;
  constructor( private router: Router) {}
  ngOnInit(): void {
  console.log(this.club.id);
  }
  detail() {
    console.log(this.club.id);
    const link=['club', this.club.id];
    this.router.navigate(link);
    
  }
}
