import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss']
})
export class UploadImgComponent implements OnInit {
  message = 'No Image Chosen';
xposition :number;
yposition :number
visible=false
  constructor() { }

  ngOnInit(): void {


  }
  url: any; //Angular 11, for stricter type
	msg = "";
  width: number;
  height: number;
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		// if(!event.target.files[0] && event.target.files[0].length == 0) {
		// 	this.msg = 'You must select an image';
		// 	return;
		// }

		// var mimeType = event.target.files[0].type;

		// if (mimeType.match(/image\/*/) == null) {
		// 	this.msg = "Only images are supported";
		// 	return;
		// }
    if ((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(event.target.files[0].name)) {

      this.message = event.target.files[0].name

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
  }
	}

// to clear box
clearImg(){
  this.url="";

  if (!this.url==undefined) {
    alert("Your delete is successful")

  }
}
onDragEnded(event) {
  let element = event.source.getRootElement();
  let boundingClientRect = element.getBoundingClientRect();
  let parentPosition = this.getPosition(element);
//  return boundingClientRect.x - parentPosition.left +boundingClientRect.y - parentPosition.top
   console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));
   this.xposition = boundingClientRect.x - parentPosition.left;
   this.yposition = boundingClientRect.y - parentPosition.top
}

getPosition(el) {
  let x = 0;
  let y = 0;
  while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: y, left: x };
}

saveImgData(){
//   this.onDragEnded()
this.visible=true

}
onResized(event: ResizedEvent) {
  this.width = event.newWidth;
  this.height = event.newHeight;

  console.log('width', this.width);
  console.log('height', this.height);
}
}
