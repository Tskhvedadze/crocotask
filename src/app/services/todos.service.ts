import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  private POSTS_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getPostsByUserId(todoId: string): Observable<any> {
    return this.http.get<any>(`${this.POSTS_URL}?userId=${todoId}`);
  }
}
