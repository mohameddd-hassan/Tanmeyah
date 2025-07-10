import { Component } from '@angular/core';
import { MainheaderComponent } from "./shared/mainheader/mainheader.component";
import { HomesliderComponent } from "./components/homeslider/homeslider.component";
import { WhoweareComponent } from "./components/whoweare/whoweare.component";

@Component({
  selector: 'app-root',
  imports: [WhoweareComponent, MainheaderComponent, HomesliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
