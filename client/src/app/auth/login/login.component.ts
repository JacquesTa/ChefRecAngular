import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Redirect the user to the login screen
  onLogin() {
    console.log(this.loginControls);
    console.log(this.emailControls);
    console.log(this.passwordControls);
    this.router.navigateByUrl('dashboard');
  }

  // Redirect the user to the sign-up screen
  onSignUp() {
    this.router.navigateByUrl('sign-up');
  }

  // convenience getter for easy access to form fields
  get loginControls() {
    return this.loginForm.controls;
  }
  get emailControls() {
    return this.loginForm.value.email;
  }
  get passwordControls() {
    return this.loginForm.value.password;
  }
}
