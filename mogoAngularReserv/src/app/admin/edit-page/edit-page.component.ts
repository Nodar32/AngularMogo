import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostsService} from "../shared/post.service";
import {switchMap} from "rxjs/operators";
import {IPost} from "../../shared/interfaces/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  flag = true;
  post: IPost;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postsService.getById(params['id'])
        })
  ).subscribe((post: IPost) => {
    this.post = post;
    this.form = new FormGroup({
      title: new FormControl(post.title, [Validators.required, Validators.maxLength(40)]),
      text: new FormControl(post.text, Validators.required)
    });
      this.flag = false;
    })
  }

  submit() {
    if (this.form.invalid){
      return
    } else {
      this.postsService.updatePost({
        ...this.post,
        text: this.form.value.text,
        title: this.form.value.title
      }).subscribe(() => {
        this.router.navigate(['/admin','dashboard'])
      })
    }
  }
}
