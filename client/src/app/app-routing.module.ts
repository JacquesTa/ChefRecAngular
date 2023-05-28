import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {HomeComponent} from './pages/home/home.component';
import {ReceptComponent} from './pages/recept/recept.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'recept', component: ReceptComponent},
  {path: '**', redirectTo: 'registration'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
