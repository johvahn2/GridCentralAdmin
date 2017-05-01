import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../_services/index';
import {Const} from '../../../config/const';

@Component({
  selector: 'app-grid-orders',
  templateUrl: './grid-orders.component.html',
  styleUrls: ['./grid-orders.component.css'],
  providers:[OrderService]
})
export class GridOrdersComponent{

  TableContent:any[];bTableContent:any[];
  Order:any;
  Status:any[];StatusBadges:any[];
  isLoading:any=false;isError:any=false;isSuccess:any=false;mess:string;
  constructor(private orderService:OrderService) {
      this.Initilize();
   }

  GetOrderList(){
    this.orderService.getOrderList()
    .subscribe(data=>{
      if(data.status == "true"){
        this.TableContent = this.formatData(data.data);
        this.bTableContent = this.TableContent;
      }
    })

  }


  UpdateOrder(){
    this.isLoading = true;
    console.log(this.Order);
    this.orderService.updateOrder(this.Order)
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

  Initilize(){
    this.TableContent=[{
      _id:"",
      User:[{
        Email: "",
        DisplayName:"" ,
        Address:"" ,
        AddressDescription:"" ,
        nToken:"" ,
        FullName:"" ,
        PhoneNumber:"" ,
        Rank:"" ,
      }],
      Items:[{
        Name: "",
        Description: "",
        Images: "",
        Category:"",
        Price:"",
        Quantity:"",
        PriceType:"",
        BidEnding:"",
        newOwner:"",
        State:"",
        Status:"",
        Thumbnail:"",
        CreatedBy:"",
        CreatedDate:""
      }],
      GrandPrice:"",
      Owner:"",
      Status:"",
      StatusBadge:"",
      Order_At:""  
    }]

    this.Order={
      _id:"",
      User:[{
        Email: "",
        DisplayName:"" ,
        Address:"" ,
        AddressDescription:"" ,
        nToken:"" ,
        FullName:"" ,
        PhoneNumber:"" ,
        Rank:"" ,
      }],
      Items:[{
        Name: "",
        Description: "",
        Images: "",
        Category:"",
        Price:"",
        Quantity:"",
        PriceType:"",
        BidEnding:"",
        newOwner:"",
        State:"",
        Status:"",
        Thumbnail:"",
        CreatedBy:"",
        CreatedDate:""
      }],
      GrandPrice:"",
      Owner:"",
      Status:"",
      StatusBadge:"",
      Order_At:""  
    }

    this.Status =["Pending","Approved","Transit","Delivered","Canceled"];
    this.StatusBadges = ["label-inverse","label-primary","label-warning","label-success","label-danger"]
    
    this.GetOrderList();

  }

  formatData(data){

      for(var i=0; i < data.length;i++){
        if(data[i].Status == this.Status[0]){

          data[i].StatusBadge = this.StatusBadges[0];

        }else if(data[i].Status == this.Status[1]){

          data[i].StatusBadge = this.StatusBadges[1];

        }else if(data[i].Status == this.Status[2]){

          data[i].StatusBadge = this.StatusBadges[2];

        }else if(data[i].Status == this.Status[3]){

          data[i].StatusBadge = this.StatusBadges[3];

        }else if(data[i].Status == this.Status[4]){

          data[i].StatusBadge = this.StatusBadges[4];
        }

        data[i].Order_At = data[i].Order_At.toString().split('T')[0];
      }

      return data;
  }

  showEditor(order,lgModal){
    this.Order = order;
    lgModal.show();
  }


  prepareDeleteO:any;
  ShowDeleteO(order,DeleteOModal){
    this.prepareDeleteO = order;
    DeleteOModal.show();
  }

  DeleteO(DeleteOModal){

    this.orderService.deleteOrder(this.prepareDeleteO)
    .subscribe(data=>{
       if(data.status == "true"){
        this.mess = data.mess;
        this.isSuccess = true;
      }else{
        this.mess = data.mess;
        this.isError = true;
      }
      this.isLoading = false;
      DeleteOModal.hide();
      setTimeout(() => 
      {
        this.isSuccess = false;
      },
      3000);     
    })

  }
}
