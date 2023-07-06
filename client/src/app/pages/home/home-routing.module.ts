import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroceryListComponent} from '../grocery-list/grocery-list.component';
import {MealPlanComponent} from '../meal-plan/meal-plan.component';
import {RecipeComponent} from '../recipe/recipe.component';

const routes: Routes = [
  {path: 'recipe', component: RecipeComponent},
  {path: 'grocery-list', component: GroceryListComponent},
  {path: 'meal-plan', component: MealPlanComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
