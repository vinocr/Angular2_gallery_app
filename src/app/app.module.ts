import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { ImageService } from "./service/image.service";
import { ImagePipe } from './filter/image.pipe';
import { appRoutes} from '../routes';
import { AddimageComponent } from './addimage/addimage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GalleryComponent,
    GalleryDetailComponent,
    ImagePipe,
    AddimageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
