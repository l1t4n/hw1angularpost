import { Component } from '@angular/core';
import { PizzaService } from '../pizzas.service';
import { IProduct } from '../interfaces/IProduct';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  public pizzas:IProduct[]
  constructor(public pizzaService:PizzaService){
    this.pizzas = this.getAllPizzas();
  }
  
  getAllPizzas() {
    return this.pizzaService.getPizzas()
  }
}
