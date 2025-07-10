import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-mainheader',
  imports: [HeaderComponent, NavComponent],
  templateUrl: './mainheader.component.html',
  styleUrl: './mainheader.component.css'
})
export class MainheaderComponent {

}
