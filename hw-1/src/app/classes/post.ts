import { IPost } from "../interfaces/IPost";

export class Post implements IPost {
    constructor(private label:string, private desc:string){
        this.label = label;
        this.desc = desc;
    }

    getLabel() {
        return this.label;
    }
    getDesc() {
        return this.desc;
    }
}