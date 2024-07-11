import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private POSTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getPostsByUserId(postId: string): Observable<any> {
    return this.http.get<any>(`${this.POSTS_URL}?postId=${postId}`);
  }
}
