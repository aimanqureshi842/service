import { Injectable } from "@angular/core";
import { IPost } from "../models/posts";
import { SnackbarService } from "./snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private _snackBarService: SnackbarService) {

  }
  postsArr: Array<IPost> = [
    {
      "userId": 1,
      "id": "1",
      "title": "sunt aut facere repellat provident ",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": "2",
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": "3",
      "title": "ea molestias quasi ",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": "4",
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": "5",
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]
  fetchAllPosts() {
    return this.postsArr
  }
  removeList(id: string) {
    let getConfirm = confirm('Are you sure you want to remove this Item ?')
    if (getConfirm) {
      let getIndex = this.postsArr.findIndex(post => post.id === id)
      this.postsArr.splice(getIndex, 1);
      this._snackBarService.openSnackBar('This Item removed successfully !')
    }
  }
  addpost(newObj: IPost) {
    this.postsArr.push(newObj);
    this._snackBarService.openSnackBar('This Item addedd successfully !')
  }
  updatedPost(updatedpost: IPost) {
    let getIndex = this.postsArr.findIndex(post => post.id === updatedpost.id);
    this.postsArr[getIndex] = updatedpost;
    this._snackBarService.openSnackBar('this Item updated successfully !')
  }
}


