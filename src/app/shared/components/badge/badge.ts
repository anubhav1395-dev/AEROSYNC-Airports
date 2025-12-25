import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Defining types makes it easier to use later
export type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="badge" [ngClass]="variant">
      <span class="dot" *ngIf="showDot"></span>
      {{ text | uppercase }}
    </span>
  `,
  styleUrls: ['./badge.css']
})
export class BadgeComponent {
  @Input() text: string = '';
  @Input() variant: BadgeVariant = 'info';
  @Input() showDot: boolean = false; // Optional status dot
}
