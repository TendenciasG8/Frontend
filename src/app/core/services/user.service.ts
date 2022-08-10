import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
    providedIn : 'root'
})

export class UserServices{
    URL_API = 'https://sd-g4-medical-records-backend.herokuapp.com/api/users';

    userSelected: User={
        email:'',
        username:'',
        password:'',
    };

    //para registrar en Admin/register
    userRegisterAdmin: User={};

    constructor(private http: HttpClient){
        
    }

    createUser(user:User){
        return this.http.post(this.URL_API,user);
    }

    getUser():Observable<any>{
        return this.http.get<any>(this.URL_API);
    }

    getUserBySpecialties(idSpecialty:any): Observable<any>{
        return this.http.get<any>(this.URL_API+"/specialty/"+idSpecialty);
    }
}