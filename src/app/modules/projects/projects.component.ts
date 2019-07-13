import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../shared/services/location.service';
import { ProjectService } from '../../shared/services/project.service';
import { Location } from '../../shared/models/location';
import { Project } from '../../shared/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public location: Location;
  public isProgress = true;

  constructor(
    private locationService: LocationService,
    private projectService: ProjectService,
  ) { }

  ngOnInit() {
    this.projectService.getAll()
    .subscribe(result => {
      this.projects = result;
      this.isProgress = false;
    });

    this.locationService.get()
    .subscribe(result => {
      this.location = result[0];
    });
  }

}
