import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.css']
})
export class AadharComponent {
  myInput: string | undefined;
  agree: boolean = false;
  constructor(private router: Router) {}
  submitForm() {
    
  }
}
