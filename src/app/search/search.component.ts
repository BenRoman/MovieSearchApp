import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { data } from '../mock-data';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operator/map';

import { MovieService } from '../movie.service';

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchResults:Movie[] = [];
  search:string = "";

  constructor(public mS :MovieService) { }
  
  
  changer(){
    this.search = this.search.trim();
    if(this.search!="")
      this.mS.searchMovie(this.search).subscribe(res => this.searchResults = res);
  }
  ngOnInit() {
  }

  setCurrentMovie(movie:Movie){
    this.mS.changeSelectedMovie(movie);
  }

}
