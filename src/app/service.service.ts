import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  img1="/assets/images/birthday-163362_640.jpg";
  img2="/assets/images/birthday-2901945_640.jpg";
  img3="/assets/images/birthday-cake-264605_640.jpg";
  img4="/assets/images/bisquit-3314554_640.jpg";
  img5="/assets/images/cake-288280_640.jpg";
  img6="/assets/images/cake-219595_640.jpg";
  img7="/assets/images/cake-288280_640jpg";
  img8="/assets/images/cake-1374069_640.jpg";
  img9="/assets/images/cake-1776661_640.jpg";
  img10="/assets/images/cake-3163117_640.jpg";
  img11="/assets/images/cakes-1681543_640.sjpg";
  img12="/assets/images/cakes-2600951_640.jpg";
  img13="/assets/images/candy-2419138_640.jpg";
  img14="/assets/images/cupcakes-690040_640.jpg";
  img15="/assets/images/dessert-352475_640.jpg";
  img16="/assets/images/events-2607706_640.jpg";
  img17="/assets/images/pie-951619_640.jpg";
  img18="/assets/images/sweet-1283244_640.jpg";

  products = [
    {id:1,name:"cakes-1",price:500,discount:10,quantity:1,img:this.img1},
    {id:2,name:"cakes-2",price:500,discount:10,quantity:1,img:this.img2},
    {id:3,name:"cakes-3",price:600,discount:10,quantity:1,img:this.img3},
    {id:4,name:"cakes-4",price:500,discount:10,quantity:1,img:this.img4},
    {id:5,name:"cakes-5",price:800,discount:10,quantity:1,img:this.img5},
    {id:6,name:"cakes-6",price:500,discount:10,quantity:1,img:this.img6},
    {id:7,name:"cakes-7",price:500,discount:10,quantity:1,img:this.img18},
    {id:8,name:"cakes-8",price:500,discount:10,quantity:1,img:this.img8},
    {id:9,name:"cakes-9",price:500,discount:10,quantity:1,img:this.img18},
    {id:10,name:"cakes-10",price:500,discount:10,quantity:1,img:this.img10},
    {id:11,name:"cakes-11",price:500,discount:10,quantity:1,img:this.img17},
    {id:12,name:"cakes-12",price:500,discount:10,quantity:1,img:this.img12},
    {id:13,name:"cakes-13",price:500,discount:10,quantity:1,img:this.img13},
    {id:14,name:"cakes-14",price:500,discount:10,quantity:1,img:this.img14},
    {id:15,name:"cakes-15",price:500,discount:10,quantity:1,img:this.img15},
    {id:16,name:"cakes-16",price:500,discount:10,quantity:1,img:this.img16},

  
  
  ]
  cart={}
  constructor() { }
}
