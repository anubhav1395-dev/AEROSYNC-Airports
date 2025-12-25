import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Fixes NG8002
import { Hotel, HotelsService } from '../hotel';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [CommonModule, FormsModule], // Fixes NG8002
  templateUrl: './hotels.html',
  styleUrls: ['./hotels.css']
})
export class HotelsComponent implements OnInit {
  // Variables requested by your HTML (Fixes TS2339 errors)
  public featuredHotels: Hotel[] = []; 
  public filteredHotels: Hotel[] = []; 
  public searchTerm: string = '';

  constructor(private hotelService: HotelsService) {}

  ngOnInit(): void {
    this.hotelService.getFeaturedHotels().subscribe({
      next: (data: Hotel[]) => {
        this.featuredHotels = data;
        this.filteredHotels = data; // Initialize the filter list
      },
      error: (err: any) => console.error('Fetch failed', err)
    });
  }

  // The method requested by (input) in your HTML (Fixes TS2339)
  onSearchChange(): void {
    const search = this.searchTerm.toLowerCase().trim();
    if (!search) {
      this.filteredHotels = this.featuredHotels;
    } else {
      this.filteredHotels = this.featuredHotels.filter(hotel =>
        hotel.name.toLowerCase().includes(search) || 
        hotel.location.toLowerCase().includes(search)
      );
    }
  }
}