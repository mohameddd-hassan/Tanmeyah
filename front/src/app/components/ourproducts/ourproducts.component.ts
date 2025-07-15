import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.component.html',
  styleUrls: ['./ourproducts.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class OurproductsComponent implements OnInit, OnDestroy {
  @ViewChild('slider', { static: false }) sliderRef!: ElementRef;
  animationId: any;
  isScrolling = false;

  card = [
    {
      title: 'El Kaseeb Financing',
      img: '../../../assets/images/ourproducts/elkasseb.svg',
      content: 'Tanmeyah delivers a diverse portfolio of financing products.',
      features: [
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      title: 'El Tayar',
      img: '../../../assets/images/ourproducts/eltayar.svg',
      content: 'Tanmeyah delivers a diverse portfolio of financing products.',
      features: [
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      title: 'El Doctor Financing',
      img: '../../../assets/images/ourproducts/doctor.svg',
      content: 'Tanmeyah delivers a diverse portfolio of financing products.',
      features: [
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      title: 'El Kabeer Financing',
      img: '../../../assets/images/ourproducts/elkabeer.svg',
      content: 'Tanmeyah delivers a diverse portfolio of financing products.',
      features: [
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      title: 'Medical Insurance Policies',
      img: '../../../assets/images/ourproducts/medical.svg',
      content: 'Tanmeyah delivers a diverse portfolio of financing products.',
      features: [
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
    {
      title: 'Life Insurance Policies',
      img: '../../../assets/images/ourproducts/life.svg',
      content: 'Tanmeyah delivers a diverse portfolio of financing products.',
      features: [
        'Customize Home dashboard and access extra widgets',
        'Connect primary Google Calendar account',
        'Add due dates, reminders, and notifications to your tasks',
      ],
    },
  ];

  ngOnInit() {
    this.resumeScroll();
  }

  ngOnDestroy() {
    this.pauseScroll();
  }

  initScroll() {
    if (!this.sliderRef?.nativeElement || this.isScrolling) return;

    this.isScrolling = true;
    const slider = this.sliderRef.nativeElement;
    const scrollAmount = 2;

    const animate = () => {
      if (!this.isScrolling) return;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
        // Reset directly to avoid flickering or shake
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollAmount;
      }

      this.animationId = requestAnimationFrame(animate);
    };

    this.animationId = requestAnimationFrame(animate);
  }

  pauseScroll() {
    this.isScrolling = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  resumeScroll() {
    this.initScroll();
  }
}
