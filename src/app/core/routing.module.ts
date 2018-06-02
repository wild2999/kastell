import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from '../layouts/layouts/layouts.component';
import { DatenschutzerklärungModule } from "../modules/datenschutzerklärung/datenschutzerklärung.module";

const routes: Routes = [
  { path: '', component: LayoutsComponent, children:
    [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: '../modules/home/home.module#HomeModule'},
      {path: 'über', loadChildren: '../modules/about/about.module#AboutModule'},
      {path: 'projekte', loadChildren: '../modules/projects/projects.module#ProjectsModule'},
      {path: 'projekt/:id', loadChildren: '../modules/project/project.module#ProjectModule'},
      {path: 'kontakte', loadChildren: '../modules/contacts/contacts.module#ContactsModule'},
      {path: 'impressum', loadChildren: '../modules/impressum/impressum.module#ImpressumModule'},
      {path: 'datenschutzerklärung', loadChildren: '../modules/datenschutzerklärung/datenschutzerklärung.module#DatenschutzerklärungModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }