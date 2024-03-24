import { Injectable } from '@angular/core';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    new User(1, "admin", "123", []),
    new User(2, "Maksym", "321", [])
  ]
  constructor() { }
  public findUser(login, password) {
    let isTrue:boolean;
    if(this.users.find((user) => user.getLogin == login && user.getPassword == password) === undefined){
      isTrue = true
    }else return isTrue = false
    return isTrue
  }
  public getUsers(){
    return this.users;
  }
}
