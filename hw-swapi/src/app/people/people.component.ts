import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  public people: any;
  constructor(public http: HttpClient, ){
    http.get(`https://swapi.dev/api/people`).subscribe(data => {
      this.people = data
      this.people = this.people.results
      console.log(this.people);
    })
  }
}
