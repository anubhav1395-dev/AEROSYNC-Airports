import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
// Adjust path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // These must match your app.routes.ts paths exactly
  mainNavLinks = [
    { label: 'Flights', path: '/landing' },
    { label: 'Hotels', path: '/hotels' },
    { label: 'Offers', path: '/offers' }
  ];
}