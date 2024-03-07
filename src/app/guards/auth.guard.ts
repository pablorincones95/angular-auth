import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '@services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenSrv: TokenService, private router: Router) {}

  canActivate(): boolean {
    const token = this.tokenSrv.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
