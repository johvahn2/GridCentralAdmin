import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../_services/index';
import {Const} from '../../../config/const';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers:[ItemService]
})
export class ItemListComponent {

  TableContent:any;
  bTableContent:any;

  searchTxt:string;

  modalBody:string;

  isBid:any = false;
  Categories:any;
  PriceType:any;
  Status:any;

  item:any;

  bImages:any[];
  newImages:any[];

  bImg1:any ="" ;bImg2:any = "";bImg3:any = "";bImg4:any = "";
  isLoading:any=false;isError:any=false;isSuccess:any=false;mess:string;

  constructor(private itemService:ItemService) {this.Initilze(); }

  getList(){
    this.itemService.getItemList()
    .subscribe(data=>{
      if(data.status == "true"){
        this.TableContent = data.data;
        console.log(typeof(this.TableContent));
        this.bTableContent = this.TableContent;
      }
    })
  }


  UpdateItem(){

    this.isLoading = true;
    this.CheckBytes();

    for(var i=0;i < this.item.Images.length;i++){
      if(this.item.Images[i] != null){
          var mi = this.item.Images[i];
          var parser = document.createElement('a');
          parser.href = mi;
          this.item.Images[i] = parser.pathname.split('/')[2];

      }

    }
    console.log(this.item);
    this.itemService.updateItem(this.item)
    .subscribe(data=>{
      if(data.status == "true"){
        this.mess = data.mess;
        this.isSuccess = true;
      }else{
        this.mess = data.mess;
        this.isError = true;
      }
      this.isLoading = false;
      setTimeout(() => 
      {
        this.isSuccess = false;
      },
      3000);
    })
  }


showModal(item:any,lgModal:any) {

  lgModal.show();
  this.item = item;
  
  if(item.PriceType == "Bid"){
    this.isBid = true;
  }
  for(var i=0;i < 4;i++){
    if(item.Images[i]) continue;
      
    item.Images[i] = null;
  }

  console.log(item);
}

PriceTypeChange(val){
  if(val == this.PriceType[1]){
    this.isBid = true;
  }else{
    this.isBid = false;
  }
}

searchAction(val){
  this.TableContent = this.bTableContent;
  this.TableContent = this.filterItems(val);
}

Initilze(){
    this.TableContent = [{
      _id:"",
      Name:"",
      Description:"",
      Price:"",
      Quantity:"",
      CreatedBy:"",
      Status:"",
      PriceType:"",
      BidEnding:"",
      State:"",
      Category:"",
      Images:[]
    }]

    this.item = {
      _id:"",
      Name:"",
      Description:"",
      Price:"",
      Quantity:"",
      CreatedBy:"",
      Status:"",
      PriceType:"",
      BidEnding:"",
      State:"",
      Category:"",
      bImages:[],
      Images:[],
    }

    this.bImages =[];

    this.Status=[
      "Avaliable","Requested","Sold"
    ]

    this.Categories =[
      "Art","Books","Cars","Clothing","Electronics/E-Games","Furniture","Health/Bueaty",
      "Jewlery","Other","Toys/Games","Tickets"
    ]

    this.PriceType =[
      "Fixed","Bid"
    ]

      this.getList();
}


    filterItems(query) {
     if(!query || query.length == 0) return this.bTableContent; //when nothing has typed
     return this.TableContent = Object.assign([], this.TableContent).filter(
      item => item.Name.toLowerCase().indexOf(query.toLowerCase()) > -1
     )
  }


  readImage1(data){
    var file =data.srcElement.files[0];
    var me = this;
    var reader = new FileReader();
      reader.onloadend = function() {
        var curl = reader.result.split(';')[1];  
        var curl2 = curl.split(',')[1]; 
        me.bImg1 = curl2;
    }
    reader.readAsDataURL(file);
  }

    readImage2(data){
      var file =data.srcElement.files[0];
      var me = this;
      var reader = new FileReader();
        reader.onloadend = function() {
          var curl = reader.result.split(';')[1];  
          var curl2 = curl.split(',')[1]; 
          me.bImg2 = curl2;
      }
      reader.readAsDataURL(file);
  }

    readImage3(data){
      var file =data.srcElement.files[0];
      var me = this;
      var reader = new FileReader();
        reader.onloadend = function() {
          var curl = reader.result.split(';')[1];  
          var curl2 = curl.split(',')[1]; 
          me.bImg3 = curl2;
      }
      reader.readAsDataURL(file);
  }

    readImage4(data){
      var file =data.srcElement.files[0];
      var me = this;
      var reader = new FileReader();
        reader.onloadend = function() {
          var curl = reader.result.split(';')[1];  
          var curl2 = curl.split(',')[1]; 
          me.bImg4 = curl2;
      }
      reader.readAsDataURL(file);
  }

  CheckBytes(){
    let curr_images:any =[null,null,null,null];
    let bImages:any = [null,null,null,null];
    for(var i=0; i < this.item.Images.length; i++){
      curr_images[i] = this.item.Images[i];
    }


    if(this.bImg1.length > 0){
      bImages[0] = this.bImg1;
      curr_images[0] = null;
    }else{
      this.bImages[0] = null;
    }
    if(this.bImg2.length != ""){
      bImages[1] = this.bImg2;
      curr_images[1] = null;
    }else{
      this.bImages[0] = null;
    }

    if(this.bImg3.length != ""){
      bImages[2] = this.bImg3;
      curr_images[2] = null;
    }else{
      this.bImages[0] = null;
    }

    if(this.bImg4.length != ""){
      bImages[3] = this.bImg4;
      curr_images[3] = null;
    }else{
      this.bImages[0] = null;
    }

    this.item.bImages = bImages;
    this.item.Images = curr_images;
  }
}
