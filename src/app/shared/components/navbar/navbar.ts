import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Required for routerLink

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  @Input() menuItems: any[] = [];
  public isScrolled = false;
  public isLoggedIn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  // FIX: Define the missing function
  public setGuestMode(): void {
    console.log('User accessing as Guest');
    this.isLoggedIn = false;
    // You can also redirect them to a specific guest view if needed
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}