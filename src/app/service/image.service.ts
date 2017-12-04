import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
getImages(){
  return this.visibleImages = IMAGES.slice(0);
 }
getImage(id:number){
  return IMAGES.slice(0).find(image =>image.id == id)
 }
}
const IMAGES = [
  {"id":1, "category":"one","caption":"view from one","url":"https://static.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"},
  {"id":2, "category":"one","caption":"view from two","url":"https://static.pexels.com/photos/196664/pexels-photo-196664.jpeg"},
  {"id":3, "category":"one","caption":"view from three","url":"https://static.pexels.com/photos/57719/rose-flowers-blossom-bloom-57719.jpeg"},
  {"id":4, "category":"two","caption":"view from four","url":"http://images.all-free-download.com/images/graphiclarge/blooming_red_roses_02_hd_picture_166924.jpg"},
  {"id":5, "category":"two","caption":"view from five","url":"https://s-media-cache-ak0.pinimg.com/originals/1c/60/de/1c60deb879c1d009e2c289199c67107c.jpg"},
  {"id":6, "category":"two","caption":"view from six","url":"https://i.pinimg.com/736x/f3/02/76/f30276ac799f3c3a94c775b1b63417ba--gardening-flower-flower-gardens.jpg"},
  {"id":7, "category":"three","caption":"view from seven","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDQBTXAfJ6aVWHKF4mgtuUjRWUcdT8GbjnUWajQTJqKs_KQXJpQ"},
  {"id":8, "category":"three","caption":"view from eight","url":"https://image.freepik.com/free-vector/coloured-roses-design_1262-2206.jpg"},
  {"id":9, "category":"three","caption":"view from nine","url":"https://i.pinimg.com/736x/36/80/d2/3680d2eff215ee1dbfbe49a914ba4058--mor-purple-purple-rose.jpg"},
]
