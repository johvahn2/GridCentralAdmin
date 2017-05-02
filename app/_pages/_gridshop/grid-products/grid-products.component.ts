import { Component, OnInit } from '@angular/core';
import {GridProductService} from '../../../_services/index';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

import {Const} from '../../../config/const';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css'],
  providers:[GridProductService]
})
export class GridProductsComponent{

  Content:any;bContent:any;
  
    QuestionContent:any[];
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 500,
        resizeMaxWidth: 700
    };

  Item:any;
  eItem:any;
  isBid:any = false;
  Categories:any;
  PriceType:any;
  Status:any;
  ImageAmount:any=0;
  isLoading:any=false;isError:any=false;isSuccess:any=false;
  mess:string;
  bImg1:any ="" ;bImg2:any = "";bImg3:any = "";bImg4:any = "";
  bImages:any[];
  prepareDelete:any;

  Answer:any;Question:any;
  prepareQuestion:any;
  prepareDeleteQ:any;
  constructor(private gridproductSerivce:GridProductService) {this.Intile(); }

  getList(){
    this.gridproductSerivce.getItemList()
    .subscribe(data=>{
      if(data.status == "true"){
        console.log(data.data);
        this.Content = data.data;
        this.bContent = this.Content;
      }
    })
  }

  AddProduct(model){
    model.show();
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


  //   readImage(imageResult: ImageResult){
  //       let src = imageResult.resized
  //           && imageResult.resized.dataURL
  //           || imageResult.dataURL;
        
  //       this.Item.bImages.push(src.split(',')[1]);
  // }

  ereadImage1(imageResult: ImageResult){
        let src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
        this.bImg1 = src.split(',')[1];
        //this.eItem.bImages.push(src.split(',')[1]);
  }

  ereadImage2(imageResult: ImageResult){
    let src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;

    this.bImg2 = src.split(',')[1];
    //this.eItem.bImages.push(src.split(',')[1]);
  }

  ereadImage3(imageResult: ImageResult){
    let src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;

    this.bImg3 = src.split(',')[1];
    //this.eItem.bImages.push(src.split(',')[1]);
  }

  ereadImage4(imageResult: ImageResult){
    let src = imageResult.resized
        && imageResult.resized.dataURL
        || imageResult.dataURL;

    this.bImg4 = src.split(',')[1];
    //this.eItem.bImages.push(src.split(',')[1]);
  }

  RegisterProduct(){
    this.Item.CreatedBy = "admin@grid.com"

      this.isError = false;
      this.isLoading = true;
      this.CheckBytes();
      console.log(this.Item);
      this.gridproductSerivce.AddItem(this.Item)
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

  UpdateProduct(){

    this.isLoading = true;
    this.CheckBytes();
    for(var i=0;i < this.eItem.Images.length;i++){
      if(this.eItem.Images[i] != null){
          var mi = this.eItem.Images[i];
          var parser = document.createElement('a');
          parser.href = mi;
          this.eItem.Images[i] = parser.pathname.split('/')[2];

      }

    }
    console.log(this.eItem);
    this.gridproductSerivce.updateItem(this.eItem)
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



  ShowDel(item,smModel){
    this.prepareDelete = item;
    smModel.show();
  }

  DeleteItem(smModal){
    console.log("Deleting:");
    console.log(this.prepareDelete);
    var mi = this.prepareDelete.Image;
    var parser = document.createElement('a');
    parser.href = mi;
    this.prepareDelete.Image = parser.pathname.split('/')[4];

    this.gridproductSerivce.DeleteAd(this.prepareDelete)
    .subscribe(data=>{
      console.log(data);
    })
    smModal.hide();
  }

  Intile(){

    this.QuestionContent=[{
        _id:"",
        ItemId:"",
        Question:"",
        Answer:"",
        Asked_By:"",
        Asked_At:"",
        Answered:"",
    }]

    this.prepareQuestion={
        _id:"",
        ItemId:"",
        Question:"",
        Answer:"",
        Asked_By:"",
        Asked_At:"",
        Answered:"",
    }
    this.Content = [{
      _id:"",
      Name:"",
      Description:"",
      Price:"",
      Quantity:"",
      CreatedBy:"admin@grid.com",
      Status:"",
      PriceType:"",
      BidEnding:"",
      State:"",
      Category:"",
      Images:[],
      Thumbnail:""
    }]
      this.Item = {
        _id:"",
        Name:"",
        Description:"",
        Price:"",
        Quantity:"",
        CreatedBy:"admin@grid.com",
        Status:"",
        PriceType:"",
        BidEnding:"",
        State:"",
        Category:"",
        bImages:[]
      }
      this.eItem = {
        _id:"",
        Name:"",
        Description:"",
        Price:"",
        Quantity:"",
        CreatedBy:"admin@grid.com",
        Status:"",
        PriceType:"",
        BidEnding:"",
        State:"",
        Category:"",
        Images:[],
        bImages:[]
      }
      this.bImages =[];
      this.Status= Const.Status;

      this.Categories = Const.mCategories;

      this.PriceType =[
        "Fixed","Bid"
      ]

      this.getList();
  }

  editItem(item,lgModalEdit){
    this.eItem = item;
    if(item.PriceType == "Bid"){
      this.isBid = true;
    }
    lgModalEdit.show();
  }

  CheckBytes(){
    let curr_images:any =[null,null,null,null];
    let bImages:any = [null,null,null,null];
    for(var i=0; i < this.eItem.Images.length; i++){
      curr_images[i] = this.eItem.Images[i];
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

    this.eItem.bImages = bImages;
    this.eItem.Images = curr_images;
    this.Item.bImages = bImages;
  }


  ShowQuestions(item,QModal){
    QModal.show();
    this.getItemQuestion(item._id);
  }

  AsnwerQ(item,answerModal){
    this.prepareQuestion = item;
    answerModal.show();
    console.log(this.Question);
  }


  getItemQuestion(id){
    this.gridproductSerivce.getItemQuestion(id)
    .subscribe(data=>{
      if(data.status == "true"){
        console.log(data.data);
        this.QuestionContent = data.data;
        for(var i=0; i < this.QuestionContent.length;i++){
          if(this.QuestionContent[i].Answer != null){
            this.QuestionContent[i].Answered = true;
          }else{
            this.QuestionContent[i].Answered = false;
          }
          //this.QuestionContent[i].Answered = false;
        }
        console.log(this.QuestionContent);
      }
    })
  }

  AddAnswer(answerModal){
      this.isError = false;
     this.isLoading = true;
    this.gridproductSerivce.AnswerQuestion(this.prepareQuestion)
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

  DeleteQ(smModal){
      this.isError = false;
     this.isLoading = true;
    this.gridproductSerivce.DeleteQuestion(this.prepareDeleteQ)
    .subscribe(data=>{
      if(data.status == "true"){
        this.mess = data.mess;
        this.isSuccess = true;
      }else{
        this.mess = data.mess;
        this.isError = true;
      }
      this.isLoading = false;
      smModal.hide();
      setTimeout(() => 
      {
        this.isSuccess = false;
      },
      3000);
    })
  }


  ShowDeleteQ(item,DeleteQModal){
    this.prepareDeleteQ = item;
    DeleteQModal.show();
  }

}
