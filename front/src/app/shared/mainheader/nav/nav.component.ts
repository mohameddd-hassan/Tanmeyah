import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../menu.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  activeLink: string = '';
  isAToggled: boolean = false;
  @Output() languageSwitch = new EventEmitter<string>();
  currentLang: string = 'en';

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

  constructor(
    public menuService: MenuService,
    private translate: TranslateService
  ) {}

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  setActive(link: string) {
    if (link === 'A') {
      this.isAToggled = !this.isAToggled;
      this.currentLang = this.isAToggled ? 'ar' : 'en';
      this.languageSwitch.emit(this.currentLang);
      return;
    }
    this.activeLink = link;
  }

  handleMobileLinkClick(link: string) {
    this.setActive(link);
    this.menuService.closeMenu();
  }
}
