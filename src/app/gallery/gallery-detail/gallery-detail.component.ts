import { Component, OnInit } from '@angular/core';
import { ImageService } from "../../service/image.service";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {

  constructor(private imageservice : ImageService, private route : ActivatedRoute) { }
   image : any;
  ngOnInit() {
    this.image = this.imageservice.getImage(
      +this.route.snapshot.params['id']
    );
  }

}
