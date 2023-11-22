import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ComplexityPasswordService } from '../services/complexity-password.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-indicator-password',
  standalone: true,
  imports: [CommonModule,MatChipsModule],
  templateUrl: './indicator-password.component.html',
  styleUrl: './indicator-password.component.css'
})
export class IndicatorPasswordComponent {
  private destroy$ = new Subject();
  constructor(public passwordService: ComplexityPasswordService) { }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
