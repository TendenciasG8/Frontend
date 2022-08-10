import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Record } from '../models/record';
@Injectable({
    providedIn : 'root'
})

export class RecordServices{
    URL_API = 'https://sd-g4-medical-records-backend.herokuapp.com/api/record';

    constructor(private http: HttpClient){

    }

    addRecord(record:Record){
        return this.http.post(this.URL_API,record);
    }

    getRecordByDni(dni: any): Observable<any>{
        return this.http.get<any>(this.URL_API+"/dni/"+dni);
    }


}