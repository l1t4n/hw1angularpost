import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss'
})
export class VehiclesComponent {
  public vehicles: any;
  constructor(public http: HttpClient, ){
    http.get(`https://swapi.dev/api/vehicles`).subscribe(data => {
      this.vehicles = data
      this.vehicles = this.vehicles.results
      console.log(this.vehicles);
    })
  }
}
