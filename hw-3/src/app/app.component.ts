import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw-3';
  public inRegister:boolean = false;
  public openModal(){
    this.inRegister = !this.inRegister
  }
}
