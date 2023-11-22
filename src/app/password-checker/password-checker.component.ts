import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { InputPasswordComponent } from '../input-password/input-password.component';
import { IndicatorPasswordComponent } from '../indicator-password/indicator-password.component';
import { Subject } from 'rxjs';
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
    MatChipsModule,
    InputPasswordComponent,
    IndicatorPasswordComponent
  ],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})
export class PasswordCheckerComponent {
  private destroy$ = new Subject();
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
