import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-project-zoom',
  templateUrl: './project-zoom.component.html',
  styleUrls: ['./project-zoom.component.scss']
})
export class ProjectZoomComponent implements OnInit {

  carouselOne: NguCarouselConfig;
  images;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    @ViewChild('carousel') carousel: NguCarousel<any>
  ) {
    this.images = data.images;
  }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 1000,
      // interval: 4000,
      point: {
        visible: false
      },
      load: 1,
      touch: true,
      loop: true,
      custom: 'banner',
      easing: 'ease-in-out'
    };
  }

}
