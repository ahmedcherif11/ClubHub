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
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { LoginClubComponent  } from './pages/login-club/login-club.component';
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { EventCardComponent } from './layouts/event-card/event-card.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
<<<<<<< HEAD
import { ClubCardComponent } from './layouts/club-card/club-card.component';
=======
import { CreatePostComponent } from './create-post/create-post.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
>>>>>>> d4a66faf6e907bbb76bea319884551358a87b28f

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
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
    LoginClubComponent,
    MainLoginComponent,
    EventCardComponent,
    EventDetailComponent,
<<<<<<< HEAD
    ClubCardComponent
=======
    CreatePostComponent,
    BlogComponent,
    LoginUserComponent,
  

>>>>>>> d4a66faf6e907bbb76bea319884551358a87b28f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
