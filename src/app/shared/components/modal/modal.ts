import { Component, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class Modal {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'System Message';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  
  // This looks into the <ng-content> to see if 'footer' exists
  @ContentChild('footerContent') footerExists?: ElementRef;

  @Output() close = new EventEmitter<void>();

  // Helper getter to use in the HTML
  get hasFooter(): boolean {
    return !!this.footerExists;
  }

  closeModal() { this.close.emit(); }
  stopProp(event: Event) { event.stopPropagation(); }
}