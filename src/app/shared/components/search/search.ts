import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template:` <div class="search-container" [class.glass-style]="glass">
    <span class="search-icon">🔍</span>
    <input 
      type="text" 
      [(ngModel)]="query" 
      (ngModelChange)="onSearchChange()" 
      [placeholder]="placeholder"
      class="search-input"
    />
    
    @if (query) {
      <button class="clear-btn" (click)="clearSearch()">✕</button>
    }
  </div>
`,
  styleUrls: ['./search.css']
})
export class Search {
  @Input() placeholder: string = 'Search flights, gates, or passengers...';
  @Input() glass: boolean = true; // Toggle for glassy or solid style
  @Output() onSearch = new EventEmitter<string>();

  query: string = '';

onSearchChange() {
  console.log('Typing...', this.query); // Check your browser console!
  this.onSearch.emit(this.query);
}

  clearSearch() {
    this.query = '';
    this.onSearch.emit('');
  }
}