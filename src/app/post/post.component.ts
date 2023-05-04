import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
 newPost : Post;
 
 
 constructor(){
  // This is how we create a new post
  this.newPost = new Post("Google", "www.google.com");
 }

 like(): Boolean{
  this.newPost.likeCount += 1;
  return false;
 }

 dislike(): Boolean{
  this.newPost.dislikeCount += 1;
  return false;
 }

}
