import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/auth/models/login.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  userName: Observable<string>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.getUser().pipe(
      map((user: UserModel) => user.username)
    )
  }

  public logout(): void {
    this.authService.logout();
  }

}
