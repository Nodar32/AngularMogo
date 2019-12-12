import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../admin/shared/post.service";
import {IPost} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: IPost[];
  flag = true;
  search = '';
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAll().subscribe(response => {
      this.posts = response;
      this.flag = false;
    })
  }

}
