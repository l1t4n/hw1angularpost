import { Injectable } from '@angular/core';
import { User } from './classes/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User;
  private usersService: UsersService;
  constructor() { }
  public getLogin(){
    return this.currentUser.getLogin();
  }
  public getPassword(){
    return this.currentUser.getPassword();
  }
  public getUsersService(){
    return this.usersService;
  }
  
  public setCurrentUser(login, password){
    this.currentUser.setLogin(login)
    this.currentUser.setPassword(password)
  }
  public getCurrentUser(){
    return this.currentUser;
  }
}
