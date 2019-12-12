import {Component, Input, OnInit} from '@angular/core';
import {IBlog} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog: IBlog;
  constructor() { }

  ngOnInit() {}

}
