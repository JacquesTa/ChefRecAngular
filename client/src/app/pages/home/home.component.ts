import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGrocery() {
    this.router.navigateByUrl('/user/grocery-list');
  }

  onRecipe() {
    this.router.navigateByUrl('/user/recipe');
  }

  onMealPlan() {
    this.router.navigateByUrl('/user/meal-plan');
  }
}
