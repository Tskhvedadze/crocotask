import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = new Router();
  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';

  closeMenuAndNavigateTo(route: string) {
    this.closeMenu();
    this.router.navigate([route]);
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
