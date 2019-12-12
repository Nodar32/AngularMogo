import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {PostsService} from "../../../admin/shared/post.service";
import {switchMap} from "rxjs/operators";
import {IPost} from "../../../shared/interfaces/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.scss']
})
export class PostIdComponent implements OnInit {
  post: IPost;
  flag = true;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postsService.getById(params['id'])
        })
      ).subscribe((post: IPost) => {
      this.post = post;
      this.flag = false;
    })
  }

}
