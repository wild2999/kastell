import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-plan',
  templateUrl: './project-plan.component.html',
  styleUrls: ['./project-plan.component.scss']
})
export class ProjectPlanComponent implements OnInit {

  image;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.image = this.data.image;
  }

}
