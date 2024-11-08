import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {
  faRightFromBracket,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { TokenService } from 'auth-guards';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements DoCheck {
  constructor(private authService: TokenService, private router: Router) {}
  public isLoggedIn = this.authService.isLoggedIn();
  public cartItemCount = 1;

  public faProfile = faRightFromBracket;
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngDoCheck(): void {
    // Call isLoggedIn on each change detection cycle
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}
