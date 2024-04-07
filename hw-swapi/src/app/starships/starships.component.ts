import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent {
  public starships: any;
  constructor(public http: HttpClient, ){
    http.get(`https://swapi.dev/api/starships`).subscribe(data => {
      this.starships = data
      this.starships = this.starships.results
      console.log(this.starships);
    })
  }
}
