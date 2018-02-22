import { NgModule } from "@angular/core";
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { AboutComponent } from "./about.component";
const API_KEY = 'AIzaSyDT5qbCwAjVK08_KuRm9eNWt6EgnBCQ-zw';

const routes: Routes = [
  { path: '', component: AboutComponent },
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: API_KEY
    }),
    SharedModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class AboutModule {}