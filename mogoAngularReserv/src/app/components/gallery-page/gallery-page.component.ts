import { Component, OnInit } from '@angular/core';
import {DateService} from "../../shared/services/date.service";
import {IClient, IImgItem} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  flag = true;
  images: IImgItem[] = [];
  constructor(private service: DateService) { }
  ngOnInit() {
    this.service.getGalleryImg().subscribe((response) => {
      this.images = response;
      this.flag = false;
    })
  }

}
