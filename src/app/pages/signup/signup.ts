import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {
  public currentStep = 1;
  public otpValue: string = '';
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
  nextStep() { 
    // If moving from Step 3 to 4, we "send" the OTP
    if (this.currentStep === 3) {
      console.log("OTP Sent to:", this.userData.email);
    }
    if (this.currentStep < 4) this.currentStep++; 
  }

  handleVerifyOTP() {
    if (this.otpValue === '1234') { // Mock validation
      this.handleSignup(); // Trigger the celebration!
    } else {
      alert("Invalid Code. Try 1234");
    }
  }
}