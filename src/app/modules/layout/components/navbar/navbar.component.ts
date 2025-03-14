import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  user$ = this.authSrv.user$;

  constructor(
    private authSrv: AuthService,
    private router: Router,
    private tokenSrv: TokenService
  ) {}

  logout() {
    this.authSrv.logout();
    this.router.navigate(['/login']);
  }

  isValidToken() {
    console.log(this.tokenSrv.isValidToken());
  }
}
