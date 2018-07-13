import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from "./project.component";
import { NgxCarouselModule } from "ngx-carousel";
import { NguCarouselModule, NguCarouselService } from '@ngu/carousel';
import { ProjectZoomComponent } from './project-zoom/project-zoom.component';
import { ProjectPlanComponent } from './project-plan/project-plan.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
];

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectZoomComponent,
    ProjectPlanComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgxCarouselModule,
    NguCarouselModule,
    SharedModule
  ],
  providers: [
    NguCarouselService
  ],
  exports: [RouterModule],
  entryComponents: [ProjectZoomComponent, ProjectPlanComponent]
})

export class ProjectModule {}