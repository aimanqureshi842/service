import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/posts';

@Component({
  selector: 'app-post-three',
  templateUrl: './post-three.component.html',
  styleUrls: ['./post-three.component.scss']
})
export class PostThreeComponent implements OnInit {
postArr:Array<IPost>=[]
@Output() editObj:EventEmitter<IPost>= new EventEmitter<IPost>()
  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this.fetchPost()
  }
  trackById(index:number,post:IPost){
return post.id
  }
fetchPost(){
this.postArr=this._postService.fetchAllPosts()
}
removeList(id:string){
this._postService.removeList(id)
}
  editList(post:IPost){
this.editObj.emit(post)
  }

}
