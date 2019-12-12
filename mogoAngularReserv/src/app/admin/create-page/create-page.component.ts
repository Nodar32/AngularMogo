import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPost} from "../../shared/interfaces/interfaces";
import {PostsService} from "../shared/post.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  constructor(private postsService: PostsService) {}
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, [Validators.required, Validators.maxLength(15)])
    })
  }
  submit() {
    if (this.form.invalid){
      return;
    }
    const post: IPost = {
      title: this.form.value.title,
      text: this.form.value.text,
      author: this.form.value.author,
      date: new Date()
    }
    this.postsService.create(post).subscribe((response) => {
      console.log(response);
      this.form.reset();
    })
  }
}
