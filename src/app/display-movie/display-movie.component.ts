import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../Movie';

@Component({
  selector: 'display-movie',
  templateUrl: './display-movie.component.html',
  styles: []
})
export class DisplayMovieComponent implements OnInit {

  constructor() { }

  @Input() movie:Movie;
  ngOnInit() {
  }

  getPosterUrl(url){
    return "https://image.tmdb.org/t/p/w500/"+url;
    // return "http://cdn.collider.com/wp-content/uploads/the-avengers-robert-downey-jr-iron-man-poster.jpg";
  }

}
