import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NguCarouselStore, NguCarouselService } from '@ngu/carousel';

@Component({
  selector: 'app-project-zoom',
  templateUrl: './project-zoom.component.html',
  styleUrls: ['./project-zoom.component.scss']
})
export class ProjectZoomComponent implements OnInit {

  carouselOne;
  carouselToken;
  images;
  index;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private carousel: NguCarouselService
  ) {
    this.images = data.images;
    this.index = data.index;
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
    }
  }

  initDataFn(key: NguCarouselStore) {
    this.carouselToken = key.token;
    setTimeout(() => this.moveToChosen());
  }

  moveToChosen() {
    this.carousel.moveToSlide(this.carouselToken, this.index, false);
  }

}
