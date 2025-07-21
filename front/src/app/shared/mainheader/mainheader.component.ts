import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-mainheader',
  imports: [HeaderComponent, NavComponent],
  templateUrl: './mainheader.component.html',
  styleUrl: './mainheader.component.css'
})
export class MainheaderComponent {
  @Output() languageSwitch = new EventEmitter<string>();
  onLanguageSwitch(lang: string) {
    this.languageSwitch.emit(lang);
  }
}
