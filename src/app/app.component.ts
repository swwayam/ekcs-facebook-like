import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Creating an Array to store all the posts that user submits
  posts : Post[] = [];

 // Add post takes input values from the user
  addPost(email : HTMLInputElement, link : HTMLInputElement): boolean{
      // Here we push the new post in the lineno 10 posts array.
      // new Post is a template imported from post model
      // we say new Post and pass in the 2 values this now creates a post which get's stored in the array
      this.posts.push(new Post(email.value, link.value))
      email.value = ""
      link.value = ""
      return false;
  }
}
