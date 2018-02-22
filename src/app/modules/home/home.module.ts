import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { NgxCarouselModule } from 'ngx-carousel';
import { SharedModule } from '../../shared/shared.module';
import 'hammerjs';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgxCarouselModule,
    SharedModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class HomeModule {}