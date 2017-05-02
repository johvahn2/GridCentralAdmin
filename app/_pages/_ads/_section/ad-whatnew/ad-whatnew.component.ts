import { Component, OnInit } from '@angular/core';
import {AdService} from '../../../../_services/index';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
@Component({
  selector: 'app-ad-whatnew',
  templateUrl: './ad-whatnew.component.html',
  styleUrls: ['./ad-whatnew.component.css'],
  providers:[AdService]
})
export class AdWhatnewComponent {

  src: string = "";

  resizeOptions: ResizeOptions = {
      resizeMaxHeight: 500,
      resizeMaxWidth: 700
  };

  Locations:any[];Type:any[];
  newAd:any;
  Adedit:any;
  viewImg:string;
  Header:any[];SubHeader:any[];Featured:any[];Footer:any[];
  
  perpareDelete:any;

  isLoading:any=false;isError:any=false;isSuccess:any=false;
  mess:string;
  constructor(private adService:AdService) { this.Initilize(); }


  getAd(loc:string){
    if(loc == this.Locations[0]){

      this.adService.getAdList(loc)
      .subscribe(data=>{
        let temp:any[] = data.data;
        if(temp != null){
          for(var i=0; i < temp.length; i++){
            temp[i].AddedOn = temp[i].AddedOn.split(' ')[0]+" "+temp[i].AddedOn.split(' ')[1]+" "+temp[i].AddedOn.split(' ')[2]+" "+temp[i].AddedOn.split(' ')[3];
          }
        }
        this.Header = temp;
        console.log(this.Header);
      })
    }else if(loc == this.Locations[1]){

      this.adService.getAdList(loc)
      .subscribe(data=>{
        let temp:any[] = data.data;
        if(temp != null){
          for(var i=0; i < temp.length; i++){
            temp[i].AddedOn = temp[i].AddedOn.split(' ')[0]+" "+temp[i].AddedOn.split(' ')[1]+" "+temp[i].AddedOn.split(' ')[2]+" "+temp[i].AddedOn.split(' ')[3];
          }
        }
        this.SubHeader = temp;
      })
    }else if(loc == this.Locations[2]){

      this.adService.getAdList(loc)
      .subscribe(data=>{
        let temp:any[] = data.data;
        if(temp != null){
          for(var i=0; i < temp.length; i++){
            temp[i].AddedOn = temp[i].AddedOn.split(' ')[0]+" "+temp[i].AddedOn.split(' ')[1]+" "+temp[i].AddedOn.split(' ')[2]+" "+temp[i].AddedOn.split(' ')[3];
          }
        }
        this.Featured = temp;
      })
    }else if(loc == this.Locations[3]){

      this.adService.getAdList(loc)
      .subscribe(data=>{
        let temp:any[] = data.data;
        if(temp != null){
          for(var i=0; i < temp.length; i++){
            temp[i].AddedOn = temp[i].AddedOn.split(' ')[0]+" "+temp[i].AddedOn.split(' ')[1]+" "+temp[i].AddedOn.split(' ')[2]+" "+temp[i].AddedOn.split(' ')[3];
          }
        }
        this.Footer = temp;
      })
    }



  }


  Add_ad(){
    this.isLoading = true;

    if(this.newAd.Location == this.Locations[0]){
      var query = "?Type=WhatNew&Section=Header";
    }else if(this.newAd.Location == this.Locations[1]){
      var query = "?Type=WhatNew&Section=SubHeader";

    }else if(this.newAd.Location == this.Locations[2]){
      var query = "?Type=WhatNew&Section=Feature";

    }else if(this.newAd.Location == this.Locations[3]){
      var query = "?Type=WhatNew&Section=Footer";
    }

    this.adService.Addad(this.newAd,query)
    .subscribe(data=>{
      if(data.status == "true"){
          this.mess = data.mess;
          this.isSuccess = true;
          this.Initilize();      
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

Update_ad(){
    this.isLoading = true;

    this.Adedit.Location = this.Adedit.Parent;

    var mi = this.Adedit.Image;
    var parser = document.createElement('a');
    parser.href = mi;
    this.Adedit.Image = parser.pathname.split('/')[4];

    if(this.Adedit.Location == this.Locations[0]){
      var query = "?Type=WhatNew&Section=Header";
    }else if(this.newAd.Location == this.Locations[1]){
      var query = "?Type=WhatNew&Section=SubHeader";

    }else if(this.Adedit.Location == this.Locations[2]){
      var query = "?Type=WhatNew&Section=Feature";

    }else if(this.Adedit.Location == this.Locations[3]){
      var query = "?Type=WhatNew&Section=Footer";
    }

    console.log(this.Adedit);

    this.adService.Updatead(this.Adedit,query)
    .subscribe(data=>{
      if(data.status == "true"){
          this.mess = data.mess;
          this.isSuccess = true;
          this.Initilize();   
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

  viewImage(img,lgModal){
    this.viewImg = img;
    lgModal.show();
  }

  Initilize(){
     this.Locations = ["whatnew-header","whatnew-subheader","whatnew-feature", "whatnew-footer"]
     this.Type = ["Static","Dynamic"]

    this.newAd = {Location:"",Owner:"",Image:"",Type:"",Show:"true",Name:"",Description:""}

    this.Adedit = {Location:"",Owner:"",Image:"",Type:"",Show:"true",Name:"",Description:"",Parent:""}

    this.Header = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.SubHeader = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Featured = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Footer = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
  
    this.getAd(this.Locations[0]);
    this.getAd(this.Locations[1]);
    this.getAd(this.Locations[2]);
    this.getAd(this.Locations[3]);
    this.getAd(this.Locations[4]);
    this.getAd(this.Locations[5]);
  }

  ShowAdChg(item){
    item.Show = !item.Show;

    console.log(item.Show);
  }

  showDeleteModal(item,smModal){
    this.perpareDelete = item;
    smModal.show();
  }
  
  DeleteAd(smModal){
    console.log("Deleting:");
    console.log(this.perpareDelete);
    var mi = this.perpareDelete.Image;
    var parser = document.createElement('a');
    parser.href = mi;
    this.perpareDelete.Image = parser.pathname.split('/')[4];
    console.log(this.perpareDelete);
    this.adService.DeleteAd(this.perpareDelete)
    .subscribe(data=>{
      console.log(data);
    })
    smModal.hide();
  }


  editAd(item,lgModal){
    this.Adedit = item;
    console.log(this.Adedit);
    lgModal.show();
  }

  selected(imageResult: ImageResult) {
      this.src = imageResult.resized
          && imageResult.resized.dataURL
          || imageResult.dataURL;

      this.newAd.Image = this.src.split(',')[1];
  }

}
