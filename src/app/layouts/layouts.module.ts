import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
  ],
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent
  ]
})

export class LayoutsModule {}