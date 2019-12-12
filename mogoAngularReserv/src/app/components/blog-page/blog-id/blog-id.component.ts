import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {DateService} from "../../../shared/services/date.service";
import {IBlog} from "../../../shared/interfaces/interfaces";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-blog-id',
  templateUrl: './blog-id.component.html',
  styleUrls: ['./blog-id.component.scss']
})
export class BlogIdComponent implements OnInit {
blog: IBlog = {
    title: '',
    text: '',
    imgUrl: '',
    views: null,
    commentsCounter: null,
    comments: []
  };
  flag = true;
  constructor(private route: ActivatedRoute, private service: DateService, config: NgbCarouselConfig) {     config.interval = 10000;
    config.wrap = true;
    config.interval = 0;
    config.keyboard = true;
    config.showNavigationIndicators = false;}

    // customize default values of carousels used by this component tree

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.service.getBlogsById(params.id).subscribe(response => {
        this.blog = response;
        console.log(response);
        this.flag = false;
      });
    });

  }

}
