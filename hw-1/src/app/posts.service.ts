import { Injectable } from '@angular/core';
import { IPost } from './interfaces/IPost';
import { Post } from './classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts:IPost[] = [
    new Post(
      "label1",
      "desc1"
    ),
    new Post(
      "label2",
      "desc2"
    ),
    new Post(
      "label3",
      "desc3"
    ),
  ]
  constructor() { }

  public getPosts():IPost[]{
    return this.posts;
  }
  public addPost(obj:IPost){
    this.posts.push(obj)
  }
}
