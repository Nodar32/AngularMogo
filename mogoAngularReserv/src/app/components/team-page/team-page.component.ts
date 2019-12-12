import { Component, OnInit } from '@angular/core';
import {DateService} from "../../shared/services/date.service";
import {IMember} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  flag = true;
  members: IMember[] = [];
  constructor(private service: DateService) { }

  ngOnInit() {

    this.service.getMembers().subscribe(response => {
      this.members = response;
      console.log(response);
      this.flag = false;
    })

  }
}
