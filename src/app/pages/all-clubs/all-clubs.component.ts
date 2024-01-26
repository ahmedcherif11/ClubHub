import { Component } from '@angular/core';
import { Club } from 'src/app/model/Club';
import { ClubserviceService } from 'src/app/services/clubservice.service';

@Component({
  selector: 'app-all-clubs',
  templateUrl: './all-clubs.component.html',
  styleUrls: ['./all-clubs.component.css']
})
export class AllClubsComponent {
  clubs: Club[] | undefined;

  constructor(private clubserv: ClubserviceService) {
    this.clubs = [];
  }

  
  
  
  ngOnInit(): void {
    this.clubs=this.clubserv.getClubs();
    
  }
  
}
