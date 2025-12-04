import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/posts';

@Component({
  selector: 'app-post-two',
  templateUrl: './post-two.component.html',
  styleUrls: ['./post-two.component.scss']
})
export class PostTwoComponent implements OnInit {
posts:Array<IPost>=[]
  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this.fetchAllPost()
  }
  fetchAllPost(){
    this.posts=this._postService.fetchAllPosts()
  }
removeList(id:string){
this._postService.removeList(id)
}






  
}

