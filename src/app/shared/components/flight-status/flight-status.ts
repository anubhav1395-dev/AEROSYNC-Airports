import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge';
import { Button } from '../button/button';

// We define the interface here so other components can use it
export interface Flight {
  id: string;
  destination: string;
  time: string;
  gate: string;
  status: 'success' | 'warning' | 'danger' | 'info';
  statusText: string;
  img:string;
}

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, BadgeComponent, Button],
  templateUrl: './flight-status.html',
  styleUrls: ['./flight-status.css']
})
export class FlightStatus {
  // 1. Receive the flight data from the parent
  @Input() flight!: Flight;

  // 2. Create the event that sends data back to the parent
  @Output() onDetails = new EventEmitter<Flight>();

  // 3. The function triggered when the user clicks 'Details'
  viewDetails() {
    this.onDetails.emit(this.flight);
  }
}