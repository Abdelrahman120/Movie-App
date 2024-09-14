import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieInterface } from '../interfaces/movie-interface';
import { RecommendationInterface } from '../interfaces/recommendation-interface';
import { DetailsInterface } from '../interfaces/details-interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceRequestService {
  constructor(private Http: HttpClient) { }

  getAllMovies(): Observable<{ results: MovieInterface[] }> {
    return this.Http.get<{ results: MovieInterface[] }>(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=916d678d619ceb4866528692dac085ea'
    );
  }

  getMovieDetails(movieId: string): Observable<{ results: DetailsInterface[] }> {
    return this.Http.get<{ results: DetailsInterface[] }>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=916d678d619ceb4866528692dac085ea`
    );
  }

  filteredMovies(
    page_number: string
  ): Observable<{ results: MovieInterface[] }> {
    return this.Http.get<{ results: MovieInterface[] }>(
      `https://api.themoviedb.org/3/movie/popular?api_key=916d678d619ceb4866528692dac085ea&page=${page_number}`
    );
  }

  searchResult(MovieName: string, pageNumber: string): Observable<{ results: MovieInterface[] }> {
    return this.Http.get<{ results: MovieInterface[] }>(
      `https://api.themoviedb.org/3/search/movie?api_key=916d678d619ceb4866528692dac085ea&query=${MovieName}&page=${pageNumber}`
    );
  }

  getRecommendations(movieId: string): Observable<{ results: RecommendationInterface[] }> {
    return this.Http.get<{ results: RecommendationInterface[] }>(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=916d678d619ceb4866528692dac085ea`
    );
  }

  getSearchResults(
    movieId: string,
    movieName: string
  ): Observable<{ results: MovieInterface[] }> {
    return this.Http.get<{ results: MovieInterface[] }>(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=916d678d619ceb4866528692dac085ea&query=${movieName}`
    );
  }
}
