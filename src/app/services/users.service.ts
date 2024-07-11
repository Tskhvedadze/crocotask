import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  USERS_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {}

  getUser(): Observable<Users[]> {
    return this._http.get<Users[]>(`${this.USERS_URL}`);
  }
}
