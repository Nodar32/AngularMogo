import {Component, Input, OnInit} from '@angular/core';
import {IClient} from "../../../shared/interfaces/interfaces";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() client: IClient;
  constructor() { }

  ngOnInit() {
  }

}
