import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="{'overlay': fullscreen, 'inline': !fullscreen}">
      <div class="glass-spinner" [ngClass]="size"></div>
      <p *ngIf="message" class="loading-text">{{ message }}</p>
    </div>
  `,
  styleUrls: ['./loader.css']
})
export class Loader {
  @Input() fullscreen: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() message: string = '';
}