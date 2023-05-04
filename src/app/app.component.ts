import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook-like';


  addPost(email : HTMLInputElement, link : HTMLInputElement){
      console.log(email.value);
      console.log(link.value);
      
      return false;
  }
}
