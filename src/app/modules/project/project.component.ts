import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { Project } from "../../shared/models/project";
import { HttpClient } from "@angular/common/http";
import { ProjectService } from "../../shared/services/project.service";
import { ActivatedRoute } from "@angular/router";
import { ProjectZoomComponent } from "./project-zoom/project-zoom.component";
import { MatDialog } from "@angular/material";
import { ProjectPlanComponent } from "./project-plan/project-plan.component";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public project: Project[];
  public isProgress = true;
  public config = {};
  private TABLET_WIDTH = 768;

  constructor(
    private _route: ActivatedRoute,
    private http: HttpClient,
    private projectService: ProjectService,
    private dialog: MatDialog,
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

  zoomSlider(index) {
    if (window.innerWidth <= this.TABLET_WIDTH - 1) return;
    if (window.innerWidth <= this.TABLET_WIDTH) {
      this.config = {
        width: '100vw',
        height: '70vh',
        data: { images: this.project['images'], index }
      }
    } else {
      this.config = {
        width: '55vw',
        height: '70vh',
        data: { images: this.project['images'], index }
      };
    }
    this.dialog.open(ProjectZoomComponent, this.config);
  }

  zoomPlan(image) {
    this.dialog.open(ProjectPlanComponent, {
      width: '80vw',
      data: { image }
    });
  }

}
