import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  public films: any;
  constructor(public http: HttpClient, ){
    http.get(`https://swapi.dev/api/films`).subscribe(data => {
      this.films = data
      this.films = this.films.results
      console.log(this.films);
    })
  }
}
