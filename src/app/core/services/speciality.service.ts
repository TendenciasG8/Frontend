import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialty } from '../models/specialty';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
    providedIn : 'root'
})

export class SpecialityServices{
    URL_API = 'https://sd-g4-medical-records-backend.herokuapp.com/api/specialties';
    
    spec: Specialty[]=[];
    specHC: Specialty[]=[];
    specRegisterUser: Specialty[]=[];
    constructor(private http: HttpClient){
        
    }

    getSpeciality(): Observable<any>{
        return this.http.get<any>(this.URL_API);
    }
}