import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComplexityPasswordService } from '../services/complexity-password.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.css'
})
export class InputPasswordComponent{

  private destroy$ = new Subject();

  constructor(public passwordService: ComplexityPasswordService) { }

  onChange(event: any): void {
    this.passwordService.onPasswordChange(event);
  }
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}


