import { Routes } from '@angular/router';
import { LandingPage } from './pages/landingpage/landingpage';
import { HotelsComponent } from './hotels/hotels';
import { LoginPage } from './pages/login/login';
import { Offers } from './offers/offers';
import { Signup } from './pages/signup/signup';


export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPage },
   { path: 'hotels', component: HotelsComponent },
  { path: 'login', component: LoginPage},
  { path: 'offers', component: Offers },
  {path:'signup', component: Signup}
  // Add other routes as you build them
];