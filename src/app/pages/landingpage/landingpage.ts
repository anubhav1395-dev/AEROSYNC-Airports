import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightStatus } from '../../shared/components/flight-status/flight-status';
import { BadgeComponent } from '../../shared/components/badge/badge';
import { Flight } from '../../shared/components/flight-status/flight-status';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Added for navigation

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, FlightStatus, BadgeComponent],
  templateUrl: './landingpage.html',
  styleUrls: ['./landingpage.css']
})
export class LandingPage implements OnInit {
  // Booking Data
  public fromLocation: string = '';
  public toLocation: string = '';
  public tripType: 'round' | 'single' = 'round';
  
  public weather = {
    temp: '24°C',
    condition: 'Cloudy',
    city: 'London',
    icon: '☁️'
  };

  private allFlights: Flight[] = [
    { id: 'QR-701', destination: 'LONDON', time: '14:30', gate: 'B12', status: 'success', statusText: 'On Time', img:'https://webcontent.apmsapi.com//WebContent/2/Compare_Airport_Car_Parking/Articles/Busy-airport-terminal-5_638779913693299831.png' },
    { id: 'EK-202', destination: 'DUBAI', time: '15:10', gate: 'A05', status: 'warning', statusText: 'Delayed', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Arrivals_hall_in_DXB_Terminal_3_%283344510514%29.jpg/250px-Arrivals_hall_in_DXB_Terminal_3_%283344510514%29.jpg' },
    { id: 'AA-442', destination: 'NEW YORK', time: '16:00', gate: 'C09', status: 'info', statusText: 'Boarding', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPo8DX6rJRNZac9b0KDDiHKcCJtEgd5CrvJQ&s' },
    { id: 'BA-117', destination: 'PARIS', time: '18:20', gate: 'D02', status: 'danger', statusText: 'Cancelled', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFzQUdOCD6FCaOdnmgPhsoPBoeOAvQoqd5g&s' }
  ];

  public filteredFlights: Flight[] = [];

  constructor(private router: Router) {} // Inject Router

  ngOnInit() {
    this.filteredFlights = [...this.allFlights];
  }

  // Enhanced Search
  handleSearch(query: string) {
    const q = query.toLowerCase().trim();
    
    // Smooth scroll to results area
    document.getElementById('flights-area')?.scrollIntoView({ behavior: 'smooth' });

    this.filteredFlights = q ? this.allFlights.filter(f => 
      f.destination.toLowerCase().includes(q) || f.id.toLowerCase().includes(q)
    ) : [...this.allFlights];
  }

  // Navigate to Dynamic Details Page
  //openDetails(flight: Flight) {
    // This goes to /deal-details/QR-701
    //this.router.navigate(['/deal-details', flight.id]);
 // }

  updateWeather() {
    if (this.toLocation) {
      this.weather.city = this.toLocation;
      // Note: In the next step, we'll connect this to a real Weather API
    }
  }

  setTripType(type: 'round' | 'single') {
    this.tripType = type;
  }
}