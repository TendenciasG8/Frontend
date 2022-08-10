import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/role';
@Injectable({
    providedIn : 'root'
})

export class RoleServices{
    URL_API = 'https://sd-g4-medical-records-backend.herokuapp.com/api/roles';

    roleUser: Role[]=[];
    constructor(private http: HttpClient){
        
    }
    getRole(): Observable<any>{
        return this.http.get<any>(this.URL_API);
    }


} 