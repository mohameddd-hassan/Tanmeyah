import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leadership',
  imports: [CommonModule],
  templateUrl: './leadership.component.html',
  styleUrl: './leadership.component.css',
})
export class LeadershipComponent {
   slides = [
    {
      img: '../../../../assets/images/ourproducts/elkasseb.svg',
      title: 'Leadership',
      description: 'At our company, our Customer Service Department is wholly committed to delivering unparalleled service to our valued customers. From the very first point of contact, customers are warmly welcomed with a friendly smile and a supportive demeanor. Our team undergoes rigorous training to adeptly handle customer requests and inquiries with efficiency and efficacy, ensuring a remarkable experience that upholds the elevated standards we hold dear.'
    },
    {
     img: '../../../../assets/images/aboutpage/leader.svg',
      title: 'Leadership',
      description: 'At our company, our Customer Service Department is wholly committed to delivering unparalleled service to our valued customers. From the very first point of contact, customers are warmly welcomed with a friendly smile and a supportive demeanor. Our team undergoes rigorous training to adeptly handle customer requests and inquiries with efficiency and efficacy, ensuring a remarkable experience that upholds the elevated standards we hold dear.'
    },
    {
      img: '../../../../assets/images/aboutpage/leader.svg',
      title: 'Leadership',
      description: 'at our company, our Customer Service Department is wholly committed to delivering unparalleled service to our valued customers. From the very first point of contact, customers are warmly welcomed with a friendly smile and a supportive demeanor. Our team undergoes rigorous training to adeptly handle customer requests and inquiries with efficiency and efficacy, ensuring a remarkable experience that upholds the elevated standards we hold dear.'
    },
  ];
  currentIndex=0

nextStory() {
  if (this.currentIndex < this.slides.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
}

prevStory() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.slides.length - 1; 
  }
}}
