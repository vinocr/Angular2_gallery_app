import { Component, Input} from '@angular/core';
import { ImageService } from "../service/image.service";
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
  title:string = "Recent photos";
  visibleImages :any[] = [];
  @Input() filterBy ?: String ="all";
  constructor(private imageservice : ImageService){
    this.visibleImages = this.imageservice.getImages();
  }
}
