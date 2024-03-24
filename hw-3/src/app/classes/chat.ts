import { Message } from "./message"

export class Chat {
    constructor(private messages:Message[]){
        this.messages = messages
    }
    public getMessages(){
        return this.messages
    }
}