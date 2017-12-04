import { Component, OnInit } from '@angular/core';
import { ImageService } from "../service/image.service";

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  constructor(private imageservice : ImageService ) { }

  onSubmit(form:NgForm){
     console.log(form.value);
  }
  ngOnInit() {
  }

}
