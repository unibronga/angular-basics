import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

    @Output() onAdd : EventEmitter<Post> = new EventEmitter<Post>()
    postTitle: string = ''
    postText: string = ''

  constructor() { }

  addPost(){
      this.postTitle.trim() && this.postText.trim()
      const newPost: Post = {
            title: this.postTitle,
            text: this.postText
      }
      console.log(newPost)
      this.postTitle = this.postText = '';

      this.onAdd.emit(newPost)

  }


}
