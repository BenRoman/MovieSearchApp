import { Component } from '@angular/core';
import { data } from './mock-data';
import { Movie} from './Movie';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/map'

import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  currentMovie:Movie = null;
 
  constructor ( private moSe : MovieService){
    this.moSe.currentMovie.subscribe(movie=>this.currentMovie = movie);
  }

  newSearch(){
    this.moSe.changeSelectedMovie(null);
  }
}
