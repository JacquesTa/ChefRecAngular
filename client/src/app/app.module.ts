import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {LoginComponent} from './auth/registration/login/login.component';
import {SignUpComponent} from './auth/registration/sign-up/sign-up.component';
import {CustomPageLayoutComponent} from './auth/components/custom-page-layout/custom-page-layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';
import {MealPlanComponent} from './pages/meal-plan/meal-plan.component';
import {GroceryListComponent} from './pages/grocery-list/grocery-list.component';
import {RecipeComponent} from './pages/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    SignUpComponent,
    CustomPageLayoutComponent,
    HomeComponent,
    RecipeComponent,
    MealPlanComponent,
    GroceryListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
