import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ourchannel',
  imports: [CommonModule],
  templateUrl: './ourchannel.component.html',
  styleUrl: './ourchannel.component.css'
})
export class OurchannelComponent {
channels=[
  {img:'../../../assets/images/channels/location.svg',title:'Branch Locator And',p:'ATMS' },
  {img:'../../../assets/images/channels/phone.svg',title:'Hot Line',p:'16164' },
  {img:'../../../assets/images/channels/whats.svg',title:'Our Whatsapp',p:' Abo El Seba3' },
  {img:'../../../assets/images/channels/bag.svg',title:'Place & follow your request',p:' Easy & Quick Loans' },
  {img:'../../../assets/images/channels/hand.svg',title:'the E payment partners',p:'Convenient Payments' },
]
}
