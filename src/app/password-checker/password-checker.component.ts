import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-password-checker',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
  textColor: string = '';
  password: string = '';
  easyStrength: string = 'gray';
  mediumStrength: string = 'gray';
  strongStrength: string = 'gray';

  onPasswordChange(event: any): void {
    this.password = event.target.value;
    this.calculatePasswordStrength();
  }

  calculatePasswordStrength(): void {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>/_-]/.test(this.password);

    if (this.password.length === 0) {
      this.easyStrength = 'gray';
      this.mediumStrength = 'gray';
      this.strongStrength = 'gray';
      return;
    } else if (this.password.length < 8) {
      this.easyStrength = 'red';
      this.mediumStrength = 'red';
      this.strongStrength = 'red';
      return;
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.easyStrength = 'green';
      this.mediumStrength = 'green';
      this.strongStrength = 'green';
      return;
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasNumbers) ||
      (hasNumbers && hasSymbols)
    ) {
      this.easyStrength = 'yellow';
      this.mediumStrength = 'yellow';
      this.strongStrength = 'gray';
      return;
    } else if (hasLetters || hasNumbers || hasSymbols) {
      this.easyStrength = 'red';
      this.mediumStrength = 'gray';
      this.strongStrength = 'gray';
      return;
    }
  }
}
