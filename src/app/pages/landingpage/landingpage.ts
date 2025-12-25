import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FlightStatus } from '../../shared/components/flight-status/flight-status';
import { Search } from '../../shared/components/search/search';
import { Modal } from '../../shared/components/modal/modal';
import { BadgeComponent } from '../../shared/components/badge/badge';
import { Flight } from '../../shared/components/flight-status/flight-status';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,FormsModule,FlightStatus, Search, BadgeComponent],
  templateUrl: './landingpage.html',
  styleUrls: ['./landingpage.css']
})
export class LandingPage implements OnInit {
  // Booking Data
  public fromLocation: string = '';
  public toLocation: string = '';

  private allFlights: Flight[] = [
    { id: 'QR-701', destination: 'LONDON', time: '14:30', gate: 'B12', status: 'success', statusText: 'On Time',img:'https://webcontent.apmsapi.com//WebContent/2/Compare_Airport_Car_Parking/Articles/Busy-airport-terminal-5_638779913693299831.png' },
    { id: 'EK-202', destination: 'DUBAI', time: '15:10', gate: 'A05', status: 'warning', statusText: 'Delayed',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Arrivals_hall_in_DXB_Terminal_3_%283344510514%29.jpg/250px-Arrivals_hall_in_DXB_Terminal_3_%283344510514%29.jpg' },
    { id: 'AA-442', destination: 'NEW YORK', time: '16:00', gate: 'C09', status: 'info', statusText: 'Boarding',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPo8DX6rJRNZac9b0KDDiHKcCJtEgd5CrvJQ&s' },
    { id: 'BA-117', destination: 'PARIS', time: '18:20', gate: 'D02', status: 'danger', statusText: 'Cancelled',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFzQUdOCD6FCaOdnmgPhsoPBoeOAvQoqd5g&s' }
  ];

  public deals = [
    { city: 'Maldives', price: '$499', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=500', tag: 'Luxury' },
    { city: 'Tokyo', price: '$820', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=500', tag: 'Limited Time' },
    { city: 'Swiss Alps', price: '$650', img: 'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?q=80&w=500', tag: 'New Route' }
  ];

  public filteredFlights: Flight[] = [];
  public selectedFlight: Flight | null = null;
  public isModalOpen = false;

  ngOnInit() {
    this.filteredFlights = [...this.allFlights];
  }

  handleSearch(query: string) {
    const q = query.toLowerCase().trim();
    this.filteredFlights = q ? this.allFlights.filter(f => 
      f.destination.toLowerCase().includes(q) || f.id.toLowerCase().includes(q)
    ) : [...this.allFlights];
  }

  openDetails(flight: Flight) {
    this.selectedFlight = flight;
    this.isModalOpen = true;
  }
  // Add this to your LandingPage class
public weather = {
  temp: '24°C',
  condition: 'Cloudy',
  city: 'London',
  icon: '☁️'
};

// Update weather when user types in "To" field
updateWeather() {
  if (this.toLocation) {
    this.weather.city = this.toLocation;
    // In a real app, you'd call a Weather API here
  }
}
// Inside your LandingPage class
public tripType: 'round' | 'single' = 'round';

setTripType(type: 'round' | 'single') {
  this.tripType = type;
}
}