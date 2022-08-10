import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MedicalRecord } from '../models/medicalRecord';
@Injectable({
    providedIn : 'root'
})

export class MedicalRecordServices{
    URL_API = 'https://sd-g4-medical-records-backend.herokuapp.com/api/medicalRec';

    constructor(private http: HttpClient){

    }

    getMedicalRecByDni(dni: any ): Observable<any>{
        return this.http.get<any>(this.URL_API+"/dni/"+dni);
    }

    addMedicalRecord(medicalRecord:MedicalRecord){
        return this.http.post(this.URL_API,medicalRecord);
    }

}