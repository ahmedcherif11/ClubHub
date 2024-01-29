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

const routes: Routes = [
{path :'home' , component: HomeComponent},
{path :'post' , component:SinglePostComponent},
{path :'contact' , component:ContactUsComponent},
{path :'club' ,children:[
   {path : '' ,component:AllClubsComponent},
    {path : ':id' ,component:ProfilclubComponent},
]},
{path :'events' , children: [
  {path: '', component: EventsComponent},
  {path: ':id', component: EventDetailComponent},
]},
{path :'blog' , component:BlogComponent},
{path :'term-conditions' , component:TermsAndConditionsComponent},
{path :'footer' , component:FooterComponent},
{path :'header' , component:HeaderComponent},
{path :'navbar' , component:NavbarComponent},
{path :'login' , component:MainLoginComponent},
{path :'clublogin' , component:LoginClubComponent},
{path :'userlogin' , component:LoginUserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
