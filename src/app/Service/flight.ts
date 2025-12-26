import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FlightService {
  // Replace this with your actual Render/Vercel Backend URL later
  private apiUrl = 'https://your-api.com/api/flights'; 

  constructor(private http: HttpClient) {}

  // This fetches the "Live Terminal" flights shown on page load
  getLiveTerminalStatus(): Observable<any[]> {
    // MOCK DATA for immediate testing
    const mockFlights = [
      { id: 'AS102', airline: 'AeroSync', from: 'LHR', to: 'JFK', time: '14:30', status: 'On Time', price: 450 },
      { id: 'AS505', airline: 'AeroSync', from: 'DXB', to: 'MLE', time: '18:15', status: 'Boarding', price: 820 },
      { id: 'AS901', airline: 'AeroSync', from: 'SIN', to: 'HND', time: '21:00', status: 'Delayed', price: 630 }
    ];
    return of(mockFlights).pipe(delay(800)); // Simulates network delay
  }

  // This is called when she hits the "Find Flights" button
  searchFlights(from: string, to: string): Observable<any[]> {
    // For now, it filters the mock list based on input
    return this.http.get<any[]>(`${this.apiUrl}/search?from=${from}&to=${to}`);
  }
}