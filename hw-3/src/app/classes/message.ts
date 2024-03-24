export class Message {
    constructor(private userId:number, private message:string){
        this.userId = userId,
        this.message = message
    }
    public getMessage(){
        return this.message;
    }
    public getId(){
        return this.userId;
    }
}