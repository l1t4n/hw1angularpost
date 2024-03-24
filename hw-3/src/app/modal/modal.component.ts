import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  public login = '';
  public password = '';
  constructor(
    public authService:AuthService
  ){}
  
  public signUp(form){
    const login = form.value.login;
    const password = form.value.password;
    console.log(form.value)
    console.log(this.authService.getUsersService().findUser(login, password));
    
  //   if(this.authService.getUsersService().findUser(login, password)){
  //     this.authService.setCurrentUser(login,password)
  // } else throw new Error("User not found");
  
  

 }
}
