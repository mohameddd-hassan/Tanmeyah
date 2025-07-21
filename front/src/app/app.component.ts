import { Component } from '@angular/core';
import { MainheaderComponent } from "./shared/mainheader/mainheader.component";
import { HomesliderComponent } from "./components/homeslider/homeslider.component";
import { WhoweareComponent } from "./components/whoweare/whoweare.component";
import { AboutComponent } from "./components/about/about.component";
import { OurproductsComponent } from './components/ourproducts/ourproducts.component';
import { NumberComponent } from './components/number/number.component';
import { OurchannelComponent } from './components/ourchannel/ourchannel.component';
import { CalcComponent } from './components/calc/calc.component';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  imports: [WhoweareComponent, MainheaderComponent, HomesliderComponent, AboutComponent,OurproductsComponent,NumberComponent,OurchannelComponent,CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en' ,'ar'])
    this.translate.setDefaultLang('en');
    this.translate.use('en'); 
   
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  }
}
