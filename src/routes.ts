import {Routes} from '@angular/router';
import {GalleryComponent} from './app/gallery/gallery.component';
import {GalleryDetailComponent} from './app/gallery/gallery-detail/gallery-detail.component';
import {AddimageComponent} from './app/addimage/addimage.component';

export const appRoutes : Routes = [
  { path : 'gallery',component : GalleryComponent },
  { path : 'image/:id' component : GalleryDetailComponent },
  { path : 'addimage' component : AddimageComponent },
  { path : '' redirectTo:'/gallery' pathMatch:'full' },
]
