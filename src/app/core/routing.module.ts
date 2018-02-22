import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from '../layouts/layouts/layouts.component';

const routes: Routes = [
  { path: '', component: LayoutsComponent, children:
    [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: '../modules/home/home.module#HomeModule'},
      {path: 'about', loadChildren: '../modules/about/about.module#AboutModule'},
      {path: 'project/:id', loadChildren: '../modules/project/project.module#ProjectModule'},
      {path: 'contacts', loadChildren: '../modules/contacts/contacts.module#ContactsModule'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }