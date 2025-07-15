import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  standalone: true,
})
export class NavComponent {
  activeLink: string = '';
  isAToggled: boolean = false;

  links: string[] = [
    'Home',
    'About US',
    'Our Products',
    'NewsRoom',
    'Sustainability',
    'LeaderShip',
    'CAREERS',
    'contact us',
    'A'
  ];

  constructor(public menuService: MenuService) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  setActive(link: string) {
    if (link === 'A') {
      this.isAToggled = !this.isAToggled;
      return; // Don't set as active link
    }
    this.activeLink = link;
  }

  handleMobileLinkClick(link: string) {
    this.setActive(link);
    this.menuService.closeMenu();
  }
}
