import { Component, OnInit } from '@angular/core';
import {DateService} from "../../shared/services/date.service";
import {IClient} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
  flag = true;
  clients: IClient[] = [];
  constructor(private service: DateService) { }
  ngOnInit() {
    this.service.getClients().subscribe(response => {
      this.clients = response;
      this.flag = false;

    })
  }

}
