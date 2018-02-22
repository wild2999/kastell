import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';
import { ContactsComponent } from "./contacts.component";

const routes: Routes = [
  { path: '', component: ContactsComponent },
];

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [],
  exports: [RouterModule]
})

export class ContactsModule {}