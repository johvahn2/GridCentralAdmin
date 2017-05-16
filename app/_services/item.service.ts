import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import {Const} from '../config/const';
import 'rxjs/add/operator/map';



@Injectable()
export class ItemService {


    contentHeader: Headers = new Headers({"Content-Type": "application/json"});
    
    constructor(private http: Http,private router: Router) { }

    AddItem(Info){
        return this.http.post(Const.Main_Url+"/admin-item/add-item",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

    getItemList(){
       return this.http.get(Const.Main_Url+"/admin-item/list")
                .map((response:Response)=>{
                    let data = response.json();
                        return data;
                })

    }

    deleteItem(Info){
        return this.http.delete(Const.Main_Url+"/item/delete/"+Info)
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    
    }

    

    updateItem(Info){
        return this.http.post(Const.Main_Url+"/admin-item/update-item",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }
}