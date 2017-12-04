import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'imageFilter'
})
export class ImagePipe implements PipeTransform {

transform(images: any[], creteria: string): any {
if(creteria == "all"){
return images;
}
else{
return images.filter(item => {
return item.category == creteria;
});
}
}

}
