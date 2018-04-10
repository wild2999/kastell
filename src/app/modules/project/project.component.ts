import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Project } from "../../shared/models/project";
import { HttpClient } from "@angular/common/http";
import { ProjectService } from "../../shared/services/project.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public project: Project[];
  public isProgress = true;

  constructor(
    private _route: ActivatedRoute,
    private http: HttpClient,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this.projectService.getOneById(id)
      .subscribe(result => {
        this.project = result;
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
    }
  }

}
