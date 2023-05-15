import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = '';
  constructor(private router: Router) {}
  onSubmit() {
    if (this.email) {
      
      this.router.navigate(['/home']);
    }
  }
}
