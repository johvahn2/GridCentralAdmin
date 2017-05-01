import { Component, OnInit } from '@angular/core';
import {AdService} from '../../../_services/index';
import {Const} from '../../../config/const';

import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.css'],
  providers:[AdService]
})
export class AdDashboardComponent {

    src: string = "";

    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 500,
        resizeMaxWidth: 700
    };


newTile:any;
TileEdit:any;

Tile1:any=[];Tile2:any;Tile3:any;Tile4:any;Tile5:any;Tile6:any;
Tile1x:any[];Tile2x:any[];Tile3x:any[];Tile4x:any[];Tile5x:any[];Tile6x:any[];
Locations:any;
Type:any;

public noWrapSlides:boolean = true;
public myInterval: any = false;

perpareDelete:any;

isLoading:any=false;isError:any=false;isSuccess:any=false;
mess:string;

viewImg:string;
  constructor(private adService:AdService) { 

    this.Initilize();
  }


  showModal(location:any,lgModal:any) {
    lgModal.show();

  }

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
        this.Tile1x = temp;
        console.log(this.Tile1x);
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
        this.Tile2x = temp;
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
        this.Tile3x = temp;
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
        this.Tile4x = temp;
      })
    }else if(loc == this.Locations[4]){
      this.adService.getAdList(loc)
      .subscribe(data=>{
        let temp:any[] = data.data;
        if(temp != null){
          for(var i=0; i < temp.length; i++){
            temp[i].AddedOn = temp[i].AddedOn.split(' ')[0]+" "+temp[i].AddedOn.split(' ')[1]+" "+temp[i].AddedOn.split(' ')[2]+" "+temp[i].AddedOn.split(' ')[3];
          }
        }
        this.Tile5x = temp;
      })
    }else if(loc == this.Locations[5]){
      this.adService.getAdList(loc)
      .subscribe(data=>{
        let temp:any[] = data.data;
        if(temp != null){
          for(var i=0; i < temp.length; i++){
            temp[i].AddedOn = temp[i].AddedOn.split(' ')[0]+" "+temp[i].AddedOn.split(' ')[1]+" "+temp[i].AddedOn.split(' ')[2]+" "+temp[i].AddedOn.split(' ')[3];
          }
        }
        this.Tile6x = temp;
      })
    }

  }

  Add_ad(){
    this.isLoading = true;
    if(this.newTile.Location == this.Locations[0]){
      var query = "?Type=DashBoard&Section=Tile1";
    }else if(this.newTile.Location == this.Locations[1]){
      var query = "?Type=DashBoard&Section=Tile2";

    }else if(this.newTile.Location == this.Locations[2]){
      var query = "?Type=DashBoard&Section=Tile3";

    }else if(this.newTile.Location == this.Locations[3]){
      var query = "?Type=DashBoard&Section=Tile4";

    }else if(this.newTile.Location == this.Locations[4]){
      var query = "?Type=DashBoard&Section=Tile5";

    }else if(this.newTile.Location == this.Locations[5]){
      var query = "?Type=DashBoard&Section=Tile6";
    }
    this.adService.Addad(this.newTile,query)
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

    this.TileEdit.Location = this.TileEdit.Parent;

    var mi = this.TileEdit.Image;
    var parser = document.createElement('a');
    parser.href = mi;
    this.TileEdit.Image = parser.pathname.split('/')[4];

    if(this.TileEdit.Location == this.Locations[0]){
      var query = "?Type=DashBoard&Section=Tile1";
    }else if(this.TileEdit.Location == this.Locations[1]){
      var query = "?Type=DashBoard&Section=Tile2";

    }else if(this.TileEdit.Location == this.Locations[2]){
      var query = "?Type=DashBoard&Section=Tile3";

    }else if(this.TileEdit.Location == this.Locations[3]){
      var query = "?Type=DashBoard&Section=Tile4";

    }else if(this.TileEdit.Location == this.Locations[4]){
      var query = "?Type=DashBoard&Section=Tile5";

    }else if(this.TileEdit.Location == this.Locations[5]){
      var query = "?Type=DashBoard&Section=Tile6";
    }
    this.adService.Updatead(this.TileEdit,query)
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

  selectImg(data){
      var file =data.srcElement.files[0];
      var me = this;
      var reader = new FileReader();
      reader.onloadend = function() {
        var curl = reader.result.split(';')[1];  
        var curl2 = curl.split(',')[1]; 
        me.newTile.Image = curl2;
    }
    reader.readAsDataURL(file);
  }

  Initilize(){
    this.Locations = ["dashboard-Tile1","dashboard-Tile2","dashboard-Tile3", "dashboard-Tile4","dashboard-Tile5","dashboard-Tile6"]
    this.Type = ["Static","Dynamic"]
    this.newTile = {Location:"",Owner:"",Image:"",Type:"",Show:"true",Name:"",Description:""}

    this.TileEdit = {Location:"",Owner:"",Image:"",Type:"",Show:"true",Name:"",Description:"",Parent:""}

    this.Tile1x = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Tile2x = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Tile3x = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Tile4x = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Tile5x = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]
    this.Tile6x = [{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:"",Parent:"",Description:""}]

    this.Tile1 = {_id:"",Location:"",Details:[{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:""}]}
    this.Tile2 = {_id:"",Location:"",Details:[{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:""}]}
    this.Tile3 = {_id:"",Location:"",Details:[{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:""}]}
    this.Tile4 = {_id:"",Location:"",Details:[{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:""}]}
    this.Tile5 = {_id:"",Location:"",Details:[{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:""}]}
    this.Tile6 = {_id:"",Location:"",Details:[{AddedOn:"",Owner:"",Name:"",Show:"",Type:"",Image:""}]}

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
    console.log(parser);
    this.perpareDelete.Image = parser.pathname.split('/')[4];

    this.adService.DeleteAd(this.perpareDelete)
    .subscribe(data=>{
      console.log(data);
    })
    smModal.hide();
  }


  viewImage(img,lgModal){
    this.viewImg = img;
    lgModal.show();
  }

  editTile(item,lgModalEdit){
    this.TileEdit = item;
    lgModalEdit.show();
  }



    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;

        this.newTile.Image = this.src.split(',')[1];
    }

}
