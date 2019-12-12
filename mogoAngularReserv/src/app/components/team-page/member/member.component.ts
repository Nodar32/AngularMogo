import {Component, Input, OnInit} from '@angular/core';
import {IMember} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() member: IMember;

  constructor() { }

  ngOnInit() {
  }

}
