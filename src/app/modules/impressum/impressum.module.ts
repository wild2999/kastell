import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ImpressumComponent } from "./impressum.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  { path: '', component: ImpressumComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ImpressumComponent
  ],
  exports: [RouterModule]
})
export class ImpressumModule { }
