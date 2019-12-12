import { Component, OnInit } from '@angular/core';
import {DateService} from "../../../shared/services/date.service";
import {IBlog} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {
  flag = true;
  blogs: IBlog[] = [];
  constructor(private service: DateService) { }

  ngOnInit() {

    this.service.getBlogs().subscribe(response => {
      this.blogs = response;
      console.log(response);
      this.flag = false;
    })

  }

}
