import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LayoutsModule } from "../layouts/layouts.module";
import { RoutingModule } from "./routing.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    LayoutsModule

  ],
  exports: [
    BrowserAnimationsModule,
    LayoutsModule,
    SharedModule,
    RoutingModule
  ],
  declarations: [ ],
  providers: [
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}