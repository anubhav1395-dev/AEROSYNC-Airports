import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deal-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deal-details.html',
  styleUrls: ['./deal-details.css']
})
export class DealDetailsPage implements OnInit {
  public dealData: any = null; // Change flightData to dealData
  public flightId: string | null = '';
  public flightData: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the ID from the URL
    this.flightId = this.route.snapshot.paramMap.get('id');
    this.loadFlightInfo(this.flightId);
  }

  loadFlightInfo(id: string | null) {
    // Mock database lookup based on ID
    const flightDatabase: any = {
      'QR-701': { dest: 'LONDON', price: '$1,200', gate: 'B12', time: '14:30', class: 'First Class', duration: '7h 20m', seat: '1A' },
      'EK-202': { dest: 'DUBAI', price: '$950', gate: 'A05', time: '15:10', class: 'Business', duration: '6h 45m', seat: '4C' },
      'AA-442': { dest: 'NEW YORK', price: '$1,100', gate: 'C09', time: '16:00', class: 'First Class', duration: '8h 10m', seat: '2D' },
      'BA-117': { dest: 'PARIS', price: '$400', gate: 'D02', time: '18:20', class: 'Premium Economy', duration: '1h 30m', seat: '12F' }
    };

    this.flightData = flightDatabase[id || 'QR-701'];
  }
}