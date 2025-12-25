import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  specialTag?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotels: Hotel[] = [
    { id: 1, name: 'Onyx Riviera', location: 'Nice, France', price: 540, rating: 4.9, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800', specialTag: 'ELITE' },
    { id: 2, name: 'The Obsidian Vault', location: 'Reykjavik, Iceland', price: 890, rating: 5.0, image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800', specialTag: 'UNIQUE' },
    { id: 3, name: 'Azure Sands Resort', location: 'Maldives', price: 1200, rating: 4.8, image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800' },
    { id: 4, name: 'AeroSync Grand', location: 'Dubai, UAE', price: 750, rating: 4.7, image: 'https://images.unsplash.com/photo-1517840901100-8179e982ad41?auto=format&fit=crop&w=800', specialTag: 'TRENDING' },
    { id: 5, name: 'Zenith Peak Lodge', location: 'Zermatt, Switzerland', price: 620, rating: 4.9, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800' },
    { id: 6, name: 'Neon District Suites', location: 'Tokyo, Japan', price: 310, rating: 4.6, image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800' },
    { id: 7, name: 'Emerald Canopy', location: 'Bali, Indonesia', price: 420, rating: 4.8, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800', specialTag: 'ECO' },
    { id: 8, name: 'The Marble Arch', location: 'London, UK', price: 580, rating: 4.5, image: 'https://images.unsplash.com/photo-1551882547-ff43c63ef53d?auto=format&fit=crop&w=800' },
    { id: 9, name: 'Lunar Bay Hotel', location: 'Santorini, Greece', price: 950, rating: 5.0, image: 'https://images.unsplash.com/photo-1469796466635-455ede028ca8?auto=format&fit=crop&w=800', specialTag: 'TOP RATED' },
    { id: 10, name: 'Velvet Horizon', location: 'New York, USA', price: 670, rating: 4.7, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800' }
  ];

  getFeaturedHotels(): Observable<Hotel[]> {
    return of(this.hotels);
  }
}