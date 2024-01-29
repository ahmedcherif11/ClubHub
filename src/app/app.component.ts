import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angu-project-web';

  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      


      const isLoginRoute = event.urlAfterRedirects.startsWith('/login')
      || event.urlAfterRedirects.startsWith('/clublogin')
      || event.urlAfterRedirects.startsWith('/userlogin');

    this.showNavbar = !isLoginRoute;
  
    });
    }
  }

