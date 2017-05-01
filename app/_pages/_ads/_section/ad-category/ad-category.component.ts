import { Component, OnInit } from '@angular/core';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import {AdService} from '../../../../_services/index';

@Component({
  selector: 'app-ad-category',
  templateUrl: './ad-category.component.html',
  styleUrls: ['./ad-category.component.css'],
  providers:[AdService]
})
export class AdCategoryComponent{
  src: string = "";

  resizeOptions: ResizeOptions = {
      resizeMaxHeight: 500,
      resizeMaxWidth: 700
  };

  Locations:any[];Type:any[];
  newAd:any;
  Adedit:any;
  viewImg:string;
  Header:any[];SubHeader:any[];
  
  perpareDelete:any;

  isLoading:any=false;isError:any=false;isSuccess:any=false;
  mess:string;
  constructor(private adService:AdService) {this.Initilize() }

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
    }

  }

  Add_ad(){
    this.isLoading = true;

    if(this.newAd.Location == this.Locations[0]){
      var query = "?Type=Category&Section=Header";
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
        var query = "?Type=Category&Section=Header";
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

  Initilize(){
     this.Locations = ["category-header"]
     this.Type = ["Static","Dynamic"]

    this.newAd = {Location:"",Owner:"",Image:"",Type:"",Show:"true",Name:"",Description:""}

    this.Adedit = {Location:"",Owner:"",Image:"",Type:"",Show:"true",Name:"",Description:"",Parent:""}

    this.Header = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]

    this.getAd(this.Locations[0]);
  }

  ShowAdChg(item){
    item.Show = !item.Show;

    console.log(item.Show);
  }
  viewImage(img,lgModal){
    this.viewImg = img;
    lgModal.show();
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
