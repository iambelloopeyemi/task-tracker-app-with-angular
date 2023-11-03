import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  constructor(private router: Router) {}

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
