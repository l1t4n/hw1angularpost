import { Injectable } from '@angular/core';
import { Product } from './classes';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {
  private burgers:IProduct[] = [
    new Product(
      "Krabsburger",
      12
    ),
    new Product(
      "BurBurBur",
      21
    ),
    new Product(
      "Kirburger",
      135
    )
  ]
  constructor() { }

  public getBurgers():IProduct[]{
    return this.burgers;
  }

  public addBurger(obj:IProduct) {
    this.burgers.push(obj)
  }

  public updateBurger(obj:IProduct, label:string) {
    const searchedBurger = this.burgers.find(el => el.getLabel() === label)
    for(const key in obj) {
      if (searchedBurger[key] !== obj[key]) {
        searchedBurger[key] = obj[key]
      }
    }
  }

  public removeBurger(label:string){
    const newList = this.burgers.filter(el => el.getLabel() !== label)
    this.burgers = newList
  }
}
