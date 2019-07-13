import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
const API_KEY = 'AIzaSyDT5qbCwAjVK08_KuRm9eNWt6EgnBCQ-zw';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
];

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    }),
    SharedModule
  ],
  exports: [RouterModule]
})

export class ProjectsModule { }
