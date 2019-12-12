import {Component, Input, OnInit} from '@angular/core';
import {IImgItem} from "../../../shared/interfaces/interfaces";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-img-item',
  templateUrl: './img-item.component.html',
  styleUrls: ['./img-item.component.scss']
})
export class ImgItemComponent implements OnInit {
  @Input() image: IImgItem;
  closeResult: string;

  constructor(private modalService: NgbModal) {}
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  ngOnInit() {
  }

}


