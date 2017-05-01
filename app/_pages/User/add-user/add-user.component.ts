import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/index';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers:[UserService]
})
export class AddUserComponent implements OnInit {

DisplayName:any;Email:any;Fullname:any;Password:any;PhoneNumber:any;RePassword:any;

isLoading:any=false;isError:any=false;isSuccess:any=false;

mess:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }


  RegisterUser(){
    this.isError = false;
    this.isLoading = true;
    let info = {
      Email:this.Email,
      FullName:this.Fullname,
      Password:this.Password,
      DisplayName:this.DisplayName,
      PhoneNumber:this.PhoneNumber
    }
    this.userService.addUser(info)
    .subscribe(data=>{
      if(data.status == "true"){
        this.mess = data.mess;
        this.isSuccess = true;
        this.clearBoard();
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


  clearBoard(){
    this.DisplayName ="";this.Email = "";this.Fullname="";this.Password="";this.PhoneNumber="";this.RePassword="";

  }

}
