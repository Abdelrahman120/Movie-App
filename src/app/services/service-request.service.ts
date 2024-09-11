import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {

  constructor(private Http: HttpClient) { }

  getAllMovies() {
    return this.Http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=916d678d619ceb4866528692dac085ea');
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=916d678d619ceb4866528692dac085ea`);
  }

  filteredMovies(page_number: string): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/movie/popular?api_key=916d678d619ceb4866528692dac085ea&page=${page_number}`);
  }

  getRecommendations(movieId: string): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=916d678d619ceb4866528692dac085ea`);
  }

  getSearchResults(movieId:string, movieName: string): Observable<any> {
    return this.Http.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=916d678d619ceb4866528692dac085ea&query=${movieName}`)
  }
}
