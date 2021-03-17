import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AngularResizedEventModule } from 'angular-resize-event';
@NgModule({
  declarations: [
    AppComponent,
    UploadImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    // AngularResizedEventModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
