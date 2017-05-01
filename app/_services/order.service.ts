import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import {Const} from '../config/const';
import 'rxjs/add/operator/map';


@Injectable()
export class OrderService {


    contentHeader: Headers = new Headers({"Content-Type": "application/json"});
    
    constructor(private http: Http,private router: Router) { }

    updateOrder(Info){
        return this.http.post(Const.Main_Url+"/admin-order/update-order",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

    deleteOrder(Info){
        return this.http.post(Const.Main_Url+"/admin-order/delete-order",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
    }

    getOrderList(){
       return this.http.get(Const.Main_Url+"/admin-order/list")
                .map((response:Response)=>{
                    let data = response.json();
                        return data;
                })

    }

    //     updateItem(Info){
    //     return this.http.post(Const.Main_Url+"/admin-order/update-item",JSON.stringify(Info),{headers: this.contentHeader})
    //         .map((response:Response)=>{
    //             let data = response.json();
    //             return data;
    //         })
    // }
}