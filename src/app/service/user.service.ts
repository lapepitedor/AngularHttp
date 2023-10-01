import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  readonly moreparams =['test1','test2']

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const theParams = { ['testList']: this.moreparams };
    
    //let myparams = new HttpParams().set('page', '5').set('sort', 'true')
    //let myparams = new HttpParams({ fromObject : theParams});
    let myparams = new HttpParams({fromString:'name=junior&id=5'});
    return this.http.get<User[]>(`${this.apiUrl}/users`,{params: myparams});
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/1`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`);
  }
}
