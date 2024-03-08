import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from '@services/token.service';
@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private tokenSrv: TokenService, private router: Router) {}

  canActivate(): boolean {
    const isValidationToken = this.tokenSrv.isValidRefreshToken();

    if (isValidationToken) {
      this.router.navigate(['/app']);
    }

    return true;
  }
}
