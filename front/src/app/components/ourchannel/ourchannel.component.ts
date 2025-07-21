import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ourchannel',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './ourchannel.component.html',
  styleUrl: './ourchannel.component.css',
})
export class OurchannelComponent {
  channels = [
    {
      img: '../../../assets/images/channels/location.svg',
      title: 'ourChannels.channels.0.title',
      p: 'ourChannels.channels.0.p',
    },
    {
      img: '../../../assets/images/channels/phone.svg',
      title: 'ourChannels.channels.1.title',
      p: 'ourChannels.channels.1.p',
    },
    {
      img: '../../../assets/images/channels/whats.svg',
      title: 'ourChannels.channels.2.title',
      p: 'ourChannels.channels.2.p',
    },
    {
      img: '../../../assets/images/channels/bag.svg',
      title: 'ourChannels.channels.3.title',
      p: 'ourChannels.channels.3.p',
    },
    {
      img: '../../../assets/images/channels/hand.svg',
      title: 'ourChannels.channels.4.title',
      p: 'ourChannels.channels.4.p',
    },
  ];
}
