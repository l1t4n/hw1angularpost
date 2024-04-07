import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {
  public planets: any;
  constructor(public http: HttpClient, ){
    http.get(`https://swapi.dev/api/planets`).subscribe(data => {
      this.planets = data
      this.planets = this.planets.results
      console.log(this.planets);
    })
  }
}
