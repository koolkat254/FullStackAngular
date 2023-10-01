import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private cookieService: CookieService) { }

  public setRoles(roles: []) {
    this.cookieService.set("roles", JSON.stringify(roles));
  }

  public getRoles() {
    const rolesCookie = this.cookieService.get('roles');
    return rolesCookie ? JSON.parse(rolesCookie) : null;
  }

  public setToken(jwtToken: string) {
    this.cookieService.set("jwtToken", jwtToken);
  }

  public getToken(): string {
    return this.cookieService.get('jwtToken');
  }

  public clear() {
    this.cookieService.delete('roles');
    this.cookieService.delete('jwtToken');
  }
  public isLoggedIn(){
    return this.getRoles() && this.getToken();
  }
}
