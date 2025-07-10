import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // مهم لو component standalone
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public menuService: MenuService) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
