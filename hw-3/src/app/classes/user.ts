import { Chat } from "./chat";

export class User {
    constructor(private id:number, private login:any, private password:any, private chats:Chat[]){
        this.id = id
        this.login = login;
        this.password = password;
        
    }
    public getId(){
        return this.id;
    }

    public getLogin(){
        return this.login;
    }

    public getPassword(){
        return this.password;
    }
    public setLogin(login){
        this.login = login
    }
    public setPassword(password){
        this.password = password
    }
}