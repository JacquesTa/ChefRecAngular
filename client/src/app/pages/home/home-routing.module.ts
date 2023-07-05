import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from '../recipe/recipe.component';

const routes: Routes = [
  {path: 'recipe', component: RecipeComponent},
  {path: 'meal-plan', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
