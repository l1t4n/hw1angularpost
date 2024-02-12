import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  public posts:any [];
  public labelValue:string = '';
  public descValue:string = '';
  constructor(
    public postService:PostsService
  ) {
    this.posts = this.getPosts()
  }

  public returnValue(value){
    return value
  }

  public readValue(value){
    this.readValue = value.value
  }

  private getPosts(){
    return this.postService.getPosts();
  }
}
