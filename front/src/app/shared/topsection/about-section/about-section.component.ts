import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
  @Input() imgsrc:string="";
  @Input() title:string="";



}
