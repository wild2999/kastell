import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { ProjectComponent } from "./project.component";
import { NgxCarouselModule } from "ngx-carousel";

const routes: Routes = [
  { path: '', component: ProjectComponent },
];

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgxCarouselModule,
    SharedModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class ProjectModule {}