import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<UserModel>;

  constructor(private router: Router) {
    this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('user')));
  }

  public getUser(): Observable<UserModel> {
    return this.userSubject.asObservable();
  }

  public login(username, password): void {
    localStorage.setItem('user', JSON.stringify({username, password}));
    this.userSubject.next({username, password});
  }
}
