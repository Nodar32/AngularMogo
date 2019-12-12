import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {FbResponseCreate, IPost} from "../../shared/interfaces/interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService{
  constructor(private http: HttpClient){}
  create(post: IPost): Observable<IPost>{
    return this.http.post(`https://mogoangularproject.firebaseio.com/posts.json`, post)
      .pipe(map ((response: FbResponseCreate) => {
        return {
          ...post,
          date: new Date(post.date),
          id: response.name
        }
      }))
  }
  getAll(): Observable<IPost[]>{
    return this.http.get(`https://mogoangularproject.firebaseio.com/posts.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object.keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }) );
  }
  updatePost(post: IPost){
    return this.http.patch(`https://mogoangularproject.firebaseio.com/posts/${post.id}.json`, post)
  }
  getById(id: string): Observable<IPost> {
    return this.http.get(`https://mogoangularproject.firebaseio.com/posts/${id}.json`)
      .pipe(map ((post: IPost) => {
        return {
          ...post,
          date: new Date(post.date),
          id
        }
      }))
  }
  remove(id: string)
  {
    return this.http.delete(`https://mogoangularproject.firebaseio.com/posts/${id}.json`)
  }
}
