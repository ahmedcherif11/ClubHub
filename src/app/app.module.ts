import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { EventsComponent } from './pages/events/events.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AllClubsComponent } from './pages/all-clubs/all-clubs.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { LoginClubComponent  } from './pages/login-club/login-club.component';
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { EventCardComponent } from './layouts/event-card/event-card.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { ClubCardComponent } from './layouts/club-card/club-card.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { ProfilclubComponent } from './pages/profilclub/profilclub.component';
import { MinieventcardComponent } from './layouts/minieventcard/minieventcard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SinglePostComponent,
    EventsComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    AllClubsComponent,
    PostCardComponent,
    LoginClubComponent,
    MainLoginComponent,
    EventCardComponent,
    EventDetailComponent,
    ClubCardComponent,
    CreatePostComponent,
    BlogComponent,
    LoginUserComponent,
    ProfilclubComponent,
    MinieventcardComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
