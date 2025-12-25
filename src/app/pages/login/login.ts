import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage {
  public email = '';
  public password = '';

  constructor(private router: Router) {}

  public handleAuth(event: Event) {
    event.preventDefault();
    
    if (this.email && this.password) {
      console.log('Credentials ready for Node.js API:', {
        email: this.email,
        password: this.password
      });
      // For now, redirect to landing. Later, you'll call your Node.js service here.
      this.router.navigate(['/landing']);
    }
  }
}