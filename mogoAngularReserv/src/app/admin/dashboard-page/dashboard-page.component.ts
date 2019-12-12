import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';
import {IPost} from "../../shared/interfaces/interfaces";
import {PostsService} from "../shared/post.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  flag = true;
  posts: IPost[];
  pSub: Subscription;
  dSub: Subscription;
  search = '';
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.pSub =  this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
      this.flag = false;
    })
  }
  ngOnDestroy(){
    if(this.pSub) {
      this.pSub.unsubscribe();
    }
    if(this.dSub) {
      this.dSub.unsubscribe();
    }
  }

  remove(id: string) {
    this.dSub = this.postsService.remove(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id)
    })
  }
}
