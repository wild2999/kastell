import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public slides: any[] = [
    {
      src: 'assets/images/house_1.jpg',
      title: 'DER MENSCH IM MITTELPUNKT'
    },
    {
      src: 'assets/images/house_2.jpg',
      title: 'IHR SPEZIALIST FÜR HOCHWERTIGES WOHNEN'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 1000,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner',
      easing: 'ease-in-out',
    }
  }

}
