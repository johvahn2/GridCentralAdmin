import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import {Const} from '../config/const';
import 'rxjs/add/operator/map';



@Injectable()
export class UserService {

    contentHeader: Headers = new Headers({"Content-Type": "application/json"});
    
    constructor(private http: Http,private router: Router) { }



    getUserList(){
       return this.http.get(Const.Main_Url+"/admin-user/list")
                .map((response:Response)=>{
                    let data = response.json();
                        return data;
                })

    }


    addUser(Info){
        return this.http.post(Const.Main_Url+"/register",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

        deleteUser(Info){
        return this.http.post(Const.Main_Url+"/delete",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }


    updateUser(Info){
        return this.http.post(Const.Main_Url+"/admin-user/update-user",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }
}