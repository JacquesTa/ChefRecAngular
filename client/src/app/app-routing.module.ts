import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './auth/registration/registration.component';
import {HomeComponent} from './pages/home/home.component';
import {RecipeComponent} from './pages/recipe/recipe.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {path: 'home', component: HomeComponent},
  {path: 'recipe', component: RecipeComponent},
  {
    path: 'user',
    loadChildren: () =>
      import('./auth/registration/registration.module').then(
        (mod) => mod.RegistrationModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {path: '**', redirectTo: 'registration'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
