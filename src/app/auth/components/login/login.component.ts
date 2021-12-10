import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  authState$: Observable<boolean>;

  constructor(private authService: AuthService,
              private router: Router) {
    this.authState$ = this.authService.getAuthState();
  }

  ngOnInit(): void {
    this.onLoggedIn(() => {
      this.router.navigateByUrl('/');
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public submit(): void {
    this.authService.login(this.form.controls.username.value, this.form.controls.password.value);
  }

  private onLoggedIn(callback: () => void): void {
    this.subscription.add(
      this.authState$.pipe(
        filter(value => value === true)
      ).subscribe(callback)
    );
  }
}
