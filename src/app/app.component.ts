import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook-like';
  posts : Post[] = [];


  addPost(email : HTMLInputElement, link : HTMLInputElement): boolean{
      this.posts.push(new Post(email.value, link.value))
     
      return false;
  }
}
