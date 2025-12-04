import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { IPost } from '../../models/posts';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.scss']
})
export class PostOneComponent implements OnInit, OnChanges {
  @ViewChild('listForm') listForm!: NgForm;
  @Input() editedObj!: IPost;
  isInEditMode: boolean = false
  constructor(private _postService: PostService,
    private _uuid: UuidService
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editedObj'].currentValue) {
      this.isInEditMode = true
      this.listForm.form.patchValue(changes['editedObj'].currentValue)
    }
  }

  addTodo() {
    if (this.listForm.valid) {
      let newObj = {
        ...this.listForm.value,
        id: this._uuid.Uuid()
      }
      this._postService.addpost(newObj);
      this.listForm.reset()
    } else {
      alert('Fill first to add !')
    }
  }
  updateTodo() {
    if (this.listForm.valid) {
      const updatedObj = {
        ...this.listForm.value,
        id: this.editedObj.id
      }
      this._postService.updatedPost(updatedObj);
      this.isInEditMode = false
      this.listForm.reset()
    } else {
      alert('Fill the field to update !')
    }
  }
}
