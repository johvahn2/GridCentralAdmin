import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {UserService} from '../../../_services/index';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService]
})
export class UserListComponent {

  TableContent:any;
  bTableContent:any;

  searchTxt:string;

  modalBody:string;

  User:any;

  Token:any;
  prepareDelete:any;
  isLoading:any=false;isError:any=false;isSuccess:any=false;mess:string;

  constructor(private userService:UserService) { 

    this.initilize();
  }

    showModal(user:any,lgModal:any) {

      lgModal.show();
      this.User = user;
      console.log(user);
    }

  searchAction(val){
    this.TableContent = this.bTableContent;
    this.TableContent = this.filterItems(val);
  }

  getList(){
    this.userService.getUserList()
    .subscribe(data=>{
      if(data.status == "true"){
        this.TableContent = this.formatData(data.data);
        this.bTableContent = this.TableContent;
      }
    })
  }

  UpdateUser(){
    this.isError = false;
    this.isLoading = true;
    this.userService.updateUser(this.User)
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

  viewToken(Token,smModal){
    this.Token = Token;
    smModal.show();
  }


  initilize(){

    this.TableContent =[{
      _id:"",
      Email:"",
      nToken:"",
      FullName:"",
      Password:"",
      DisplayName:"",
      PhoneNumber:"",
      Rank:"",
      createdAt:""
    }]

    this.User =[{
      _id:"",
      Email:"",
      nToken:"",
      FullName:"",
      Password:"",
      DisplayName:"",
      PhoneNumber:"",
      Rank:"",
      createdAt:""
    }]

    this.getList();
  }

  formatData(data){

    for(var i=0; i < data.length;i++){
      data[i].createdAt = data[i].createdAt.toString().split('T')[0];
    }

    return data;
  }

  filterItems(query) {
     if(!query || query.length == 0) return this.bTableContent; //when nothing has typed
     return this.TableContent = Object.assign([], this.TableContent).filter(
      item => item.DisplayName.toLowerCase().indexOf(query.toLowerCase()) > -1
     )
  }

  ShowDelete(sureModal,user){
    this.prepareDelete = user;
    sureModal.show();
  }

  DeleteUser(smModal){
    this.isError = false;
    this.isLoading = true;

    this.userService.deleteUser(this.prepareDelete)
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

    smModal.hide();
  }




}
