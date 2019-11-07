import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LbCreateResponse, Post} from './interfaces';
import {environment} from '../../environments/environment';
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})


export class PostsService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post( `${environment.lbDbUrl}`, post)
      .pipe(map((responce: LbCreateResponse )=>{
        return {
          ...post,
          id: responce.name,
          date: new Date(post.date)
        };
      }));
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.lbDbUrl}`)

    // return this.http.get<Post[]>(`${environment.lbDbUrl}`)
    //   .pipe(map( (response:{[key: string]: any })=>{
    //     return Object.
    //     keys(response)
    //       .map( key => ({
    //         ...response[key],
    //         id: key,
    //         date: new Date(response[key].date)
    //       }))
    //
    //   } ))
  }

}
