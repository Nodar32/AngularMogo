import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBlog, IClient, IImgItem, IMember} from "../interfaces/interfaces";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  url = "https://mogoangularproject.firebaseio.com/";
  clientsUrl = this.url + 'clients.json';
  blogsUrl = this.url + 'blogs.json';
  galleryImgsUrl = this.url + 'galleryImgs.json';
  membersUrl = this.url + 'members.json'
  constructor(private http: HttpClient) { }
  getClients(){
    return this.http.get<IClient[]>(this.clientsUrl).pipe(delay(1500))
  }
  getBlogs(){
    return this.http.get<IBlog[]>(this.blogsUrl).pipe(delay(1500))
  }
  getBlogsById(id)
  {
    return this.http.get<IBlog>(`https://mogoangularproject.firebaseio.com/blogs/${id-1}.json`)
      .pipe(delay(1000))
  }
  getGalleryImg() {
    return this.http.get<IImgItem[]>(this.galleryImgsUrl).pipe(delay(1500))
  }
  getMembers() {
    return this.http.get<IMember[]>(this.membersUrl).pipe(delay(1500))
  }
}
