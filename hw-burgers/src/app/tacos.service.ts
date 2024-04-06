import { Injectable } from '@angular/core';
import { Product } from './classes';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class TacosService {
  private tacos:IProduct[] = [
    new Product(
      "Huyaco", 12
    ),
    new Product(
      "Pizdaco", 21
    ),
    new Product(
      "Nigger", 0.1
    )
  ]
  constructor() { }

  public getTacos():IProduct[]{
    return this.tacos;
  }

  public addTacos(obj:IProduct) {
    this.tacos.push(obj)
  }

  public updateTacos(obj:IProduct, label:string) {
    const searchedTacos = this.tacos.find(el => el.getLabel() === label)
    for(const key in obj) {
      if (searchedTacos[key] !== obj[key]) {
        searchedTacos[key] = obj[key]
      }
    }
  }

  public removeTacos(label:string){
    const newList = this.tacos.filter(el => el.getLabel() !== label)
    this.tacos = newList
  }
}
