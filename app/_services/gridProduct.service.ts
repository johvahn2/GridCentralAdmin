import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import {Const} from '../config/const';
import 'rxjs/add/operator/map';


@Injectable()
export class GridProductService {


    contentHeader: Headers = new Headers({"Content-Type": "application/json"});
    
    constructor(private http: Http,private router: Router) { }

    AddItem(Info){
        return this.http.post(Const.Main_Url+"/admin-grid-shop/add-product",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

    getItemList(){
       return this.http.get(Const.Main_Url+"/admin-grid-shop/list")
                .map((response:Response)=>{
                    let data = response.json();
                        return data;
                })

    }

    getItemQuestion(id){
       return this.http.get(Const.Main_Url+"/admin-grid-shop/questions/"+id)
                .map((response:Response)=>{
                    let data = response.json();
                        return data;
                })
    }
    AnswerQuestion(Info){
        return this.http.post(Const.Main_Url+"/admin-grid-shop/questions-answer",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

    DeleteQuestion(Info){
        return this.http.post(Const.Main_Url+"/admin-grid-shop/questions-delete",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

    DeleteAd(Info){
    return this.http.post(Const.Main_Url+"/admin-grid-shop/delete",JSON.stringify(Info),{headers: this.contentHeader})
        .map((response:Response)=>{
            let data = response.json();
            return data;
        })
    }

    updateItem(Info){
    return this.http.post(Const.Main_Url+"/admin-grid-shop/update-item",JSON.stringify(Info),{headers: this.contentHeader})
        .map((response:Response)=>{
            let data = response.json();
            return data;
        })
    }
}