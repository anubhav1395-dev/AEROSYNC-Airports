import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // 1. Import RouterLink here

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // 2. Add RouterLink to imports
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  public currentStep = 1;
  public userData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passportNumber: '',
    preference: 'Economy'
  };

  // 3. Inject the Router in the constructor
  constructor(private router: Router) {}

  nextStep() { if (this.currentStep < 3) this.currentStep++; }
  prevStep() { if (this.currentStep > 1) this.currentStep--; }
  
  handleSignup() {
    // Start Confetti
    document.body.classList.add('active-confetti');

    // Wait for the celebration, then navigate
    setTimeout(() => {
      document.body.classList.remove('active-confetti');
      this.router.navigate(['/landing']); // This will now work!
    }, 3000);
  }
}