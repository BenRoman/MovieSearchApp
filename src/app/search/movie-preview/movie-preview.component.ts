import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Movie';

@Component({
  selector: 'movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {

  @Input() movie :Movie ;
  constructor() { }

  ngOnInit() {
  }

  backdropStyle=()=>({
    'background':` url(https://image.tmdb.org/t/p/w500${this.movie.backdrop_path})`,
    'background-size':'cover',
    'text-align':'center'

  })

}
