import { NgModule } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { DatenschutzerklärungComponent } from "./datenschutzerklärung.component";

const routes: Routes = [
  { path: '', component: DatenschutzerklärungComponent },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DatenschutzerklärungComponent
  ],
  exports: [RouterModule]
})
export class DatenschutzerklärungModule { }
