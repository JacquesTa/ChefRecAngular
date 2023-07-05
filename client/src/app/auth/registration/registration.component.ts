import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  constructor(public router: Router) {}

  // Redirect the user to the login screen
  onLogin() {
    this.router.navigateByUrl('/user/login');
  }

  // Redirect the user to the sign-up screen
  onSignUp() {
    this.router.navigateByUrl('/user/sign-up');
  }
}
