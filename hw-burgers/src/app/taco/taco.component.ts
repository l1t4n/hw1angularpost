import { Component } from '@angular/core';
import { TacosService } from '../tacos.service';
import { IProduct } from '../interfaces/IProduct';


@Component({
  selector: 'app-taco',
  templateUrl: './taco.component.html',
  styleUrl: './taco.component.scss'
})
export class TacoComponent {
  public tacos:IProduct[]
  constructor(public tacoService:TacosService){
    this.tacos = this.getAllTaco();
  }
  
  getAllTaco() {
    return this.tacoService.getTacos()
  }
}
