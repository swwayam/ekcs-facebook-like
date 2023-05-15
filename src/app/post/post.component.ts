import { Component, Input } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

// App component is passing us post one by one
// We are taking the input and storing it in newPost
// Once the value is stored it's passed to html
// in html we say newPost.title and newPost.link this will display the UI with the post values

@Input() newPost !: Post;
 
 
 constructor(){
  
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
