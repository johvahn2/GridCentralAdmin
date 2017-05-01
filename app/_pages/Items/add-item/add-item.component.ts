import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../../_services/index';
import {Const} from '../../../config/const';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers:[ItemService]
})
export class AddItemComponent {

  Item:any;

  isBid:any = false;
  Categories:any;
  PriceType:any;
  Status:any;

  ImageAmount:any=0;

isLoading:any=false;isError:any=false;isSuccess:any=false;
mess:string;

  constructor(private itemService:ItemService) {
    this.Intile();
   }


readImage(data){
  var file =data.srcElement.files[0];
  var me = this;
  var reader = new FileReader();
    reader.onloadend = function() {
      var curl = reader.result.split(';')[1];  
      var curl2 = curl.split(',')[1]; 
      me.Item.bImages.push(curl2);
  }
  reader.readAsDataURL(file);
}

PriceTypeChange(val){
  if(val == this.PriceType[1]){
    this.isBid = true;
  }else{
    this.isBid = false;
  }
}

ImageAction(val){
  this.ImageAmount = val;
}

RegisterItem(){
  this.Item.CreatedBy = "admin@grid.com"

    this.isError = false;
    this.isLoading = true;

    this.itemService.AddItem(this.Item)
    .subscribe(data=>{
      if(data.status == "true"){
        this.mess = data.mess;
        this.isSuccess = true;
        this.Intile();
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

  Intile(){

      this.Item = {
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
        bImages:[]
      }

      this.Status= Const.Status;

      this.Categories = Const.mCategories;

      this.PriceType =[
        "Fixed","Bid"
      ]
  }

}
