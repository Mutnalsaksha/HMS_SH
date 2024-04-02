import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  mobileNumber: string = '';
  otp: string[] = Array(6).fill(''); // Initialize OTP array
  showOTPForm: boolean = false;
  showLoginContainer: boolean = true;

  navigateToOTP() {
    // For demonstration purposes, always navigate to OTP
    this.showLoginContainer = false;
    this.showOTPForm = true;
  }

  login() {
    // Verify OTP and authenticate user here
    console.log('Mobile Number:', this.mobileNumber);
    console.log('OTP:', this.otp.join(''));

    // Reset form and hide OTP form
    this.mobileNumber = '';
    this.otp = Array(6).fill('');
    this.showLoginContainer = true;
    this.showOTPForm = false;
  }

  moveToNextInput(event: any, index: number) {
    if (event.target.value.length === 1 && index < this.otp.length) {
      const nextInput = document.getElementById(`otp${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
    // If last digit is entered, prevent focus shift
    if (index === this.otp.length && event.target.value.length === 1) {
      event.target.blur();
    }
  }
}
