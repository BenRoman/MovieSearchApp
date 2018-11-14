import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';
import { HttpClient , HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'

import { Movie} from './Movie';

@Injectable()
export class MovieService {


  private selectedMovie$:Subject<Movie> = new Subject<Movie>();
  private apiKey:string = "d20f9d585d100621a241b86c08c5d600";
  private baseAPIurl : string = "https://api.themoviedb.org/3/search/movie";
  
  constructor(private http:HttpClient) { }

  get currentMovie(){
    return this.selectedMovie$;
  }

  searchMovie(query:string){
    const params = new HttpParams().set('api_key' , this.apiKey).set('query' , query).set('language','uk-UA');
    return this.http.get<any>(this.baseAPIurl , {params}).map(res=>res.results);
  }

  changeSelectedMovie(movie:Movie){
    this.selectedMovie$.next(movie);
  }
  

}
