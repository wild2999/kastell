import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { SlideService } from '../../shared/services/slide.service';
import { Slide } from '../../shared/models/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public slides: Slide[];
  public isProgress = true;

  constructor(private slideService: SlideService) { }

  ngOnInit() {
    this.slideService.getAll()
      .subscribe(result => {
        this.slides = result;
        this.isProgress = false;
      });

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
    };
  }

}
