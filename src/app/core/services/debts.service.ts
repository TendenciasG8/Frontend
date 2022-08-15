import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { Business } from '../models/business';
import { Debts } from '../models/debts';
@Injectable({
    providedIn : 'root'
})

export class DebtsServices{
    URL_API = 'https://tendenciasg8.herokuapp.com/api/debts';
    constructor(private http: HttpClient){
    }
    public debts:Debts={};

    createDebts(debts:Debts){
        return this.http.post(this.URL_API,debts);
    }

    getDebts():Observable<any>{
        return this.http.get<any>(this.URL_API);
    }
}