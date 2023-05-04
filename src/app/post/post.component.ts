import { Component } from '@angular/core';
import { Post } from './post.module';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
 newPost : Post;
 newPost1 : Post;
 
 constructor(){
  // This is how we create a new post
  this.newPost = new Post("Google", "www.google.com");
  this.newPost1 = new Post("Gmail", "gmail.com")
 }

}
