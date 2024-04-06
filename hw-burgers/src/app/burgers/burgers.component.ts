import { Component } from '@angular/core';
import { BurgersService } from '../burgers.service';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrl: './burgers.component.scss'
})
export class BurgersComponent {
  public burgers:IProduct[]
  constructor(public burgersService:BurgersService){
    this.burgers = this.getAllBurgers();
  }
  
  getAllBurgers() {
    return this.burgersService.getBurgers()
  }
}
