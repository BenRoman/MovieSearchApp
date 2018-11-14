import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header.component';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { SearchComponent } from './search/search.component';
import { MoviePreviewComponent } from './search/movie-preview/movie-preview.component';
import { FooterComponent } from '../app/footer/footer.component';
import { MovieService } from './movie.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayMovieComponent,
    SearchComponent,
    MoviePreviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
