import { Injectable } from '@angular/core';
import { Product } from './classes';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private pizzas:IProduct[] = [
    new Product(
      "Peperoni", 34
      ),
    new Product(
      "Anuvanus", 71
      ),
    new Product(
      "7 Cheese", 135
      ),
  ]
  constructor() { }

  public getPizzas():IProduct[]{
    return this.pizzas;
  }

  public addPizzas(obj:IProduct) {
    this.pizzas.push(obj)
  }

  public updatePizza(obj:IProduct, label:string) {
    const searchedPizza = this.pizzas.find(el => el.getLabel() === label)
    for(const key in obj) {
      if (searchedPizza[key] !== obj[key]) {
        searchedPizza[key] = obj[key]
      }
    }
  }

  public removePizza(label:string){
    const newList = this.pizzas.filter(el => el.getLabel() !== label)
    this.pizzas = newList
  }
}
