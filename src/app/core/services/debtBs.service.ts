import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DebtBanco } from '../models/debtBs';
@Injectable({
    providedIn : 'root'
})

export class DebtBsServices{
    URL_API = 'https://tendenciasg8.herokuapp.com/api/debtBs';
    constructor(private http: HttpClient){
    }
    public debtBs:DebtBanco={};

    getDeudas():Observable<any>{
        return this.http.get<any>(this.URL_API);
    }
}