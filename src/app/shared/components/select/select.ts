import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.html',
  styleUrls: ['./select.css']
})
export class Select {
  @Input() label: string = '';
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() value: any;
  
  @Output() valueChange = new EventEmitter<any>();

  onValueChange(newValue: any) {
    this.valueChange.emit(newValue);
  }
}