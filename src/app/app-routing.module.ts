import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AllClubsComponent } from './pages/all-clubs/all-clubs.component';
import { EventsComponent } from './pages/events/events.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { MainLoginComponent } from './pages/main-login/main-login.component';
import { LoginClubComponent } from './pages/login-club/login-club.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { ProfilclubComponent } from './pages/profilclub/profilclub.component';
import { ListeParticipantComponent } from './pages/liste-participant/liste-participant.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
{path :'login' , component:MainLoginComponent},
{path:'clublogin', component:  LoginClubComponent},
{path:'userlogin', component: LoginUserComponent},
{path :'home' , component: HomeComponent ,
canActivate: [authGuard]},
{path :'post' , component:SinglePostComponent,
canActivate: [authGuard]},
{path :'contact' , component:ContactUsComponent,
canActivate: [authGuard]},
{path :'club' ,children:[
   {path : '' ,component:AllClubsComponent},
    {path : ':id' ,component:ProfilclubComponent},
],
canActivate: [authGuard]},
{path :'events' , children: [
  {path: '', component: EventsComponent},
  {path: ':id', component: EventDetailComponent},
  {path: 'participants/:id', component: ListeParticipantComponent},
],
canActivate: [authGuard]},
{path :'blog' , component:BlogComponent,
canActivate: [authGuard]},
{path :'term-conditions' , component:TermsAndConditionsComponent,
canActivate: [authGuard]},
{path :'footer' , component:FooterComponent,
canActivate: [authGuard]},
{path :'header' , component:HeaderComponent,
canActivate: [authGuard]},
{path :'navbar' , component:NavbarComponent,
canActivate: [authGuard]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
