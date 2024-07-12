import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllUsersService {
  private POSTS_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get<any>(`${this.POSTS_URL}`);
  }
}