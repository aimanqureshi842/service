import { Component } from '@angular/core';
import { IPost } from './shared/models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editedObj!:IPost
  title = 'service';
  editedObject(editedObj:IPost){
this.editedObj=editedObj 
  }
}
