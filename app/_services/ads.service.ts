import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import {Const} from '../config/const';
import 'rxjs/add/operator/map';


@Injectable()
export class AdService {

    contentHeader: Headers = new Headers({"Content-Type": "application/json"});
    
    constructor(private http: Http,private router: Router) { }

        Addad(Info,query){
        return this.http.post(Const.Main_Url+"/admin-ad/add-ad"+query,JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
        }

        Updatead(Info,query){
        return this.http.post(Const.Main_Url+"/admin-ad/update-ad"+query,JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
        }



        DeleteAd(Info){
        return this.http.post(Const.Main_Url+"/admin-ad/delete",JSON.stringify(Info),{headers: this.contentHeader})
            .map((response:Response)=>{
                let data = response.json();
                return data;
            })
        }

        getAdList(loc){
        return this.http.get(Const.Main_Url+"/admin-ad/get/"+loc)
                    .map((response:Response)=>{
                        let data = response.json();
                            return data;
                    })

        }
}