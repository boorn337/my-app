import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplexityPasswordService {

  textColor: string = '';
  password: string = '';
  styles: { [key: string]: string } = {
    easyStrength: 'gray',
    mediumStrength: 'gray',
    strongStrength: 'gray'
  };

  onPasswordChange(event: any): void {
    this.password = event.target.value;
    this.calculatePasswordStrength();
  }

  calculatePasswordStrength(): void {
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>/_-]/.test(this.password);

    if (this.password.length === 0) {
      this.styles = { easyStrength: 'gray', mediumStrength: 'gray', strongStrength: 'gray' };
    } else if (this.password.length < 8) {
      this.styles = { easyStrength: 'red', mediumStrength: 'red', strongStrength: 'red' };
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.styles = { easyStrength: 'green', mediumStrength: 'green', strongStrength: 'green' };
    } else if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasNumbers) ||
      (hasNumbers && hasSymbols)
    ) {
      this.styles = { easyStrength: 'yellow', mediumStrength: 'yellow', strongStrength: 'gray' };
    } else if (hasLetters || hasNumbers || hasSymbols) {
      this.styles = { easyStrength: 'red', mediumStrength: 'gray', strongStrength: 'gray' };
    }
  }
}
