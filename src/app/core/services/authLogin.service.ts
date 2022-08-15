import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { Business } from '../models/business';
@Injectable({
    providedIn : 'root'
})

export class AuthServices{
    URL_API1 = 'https://tendenciasg8.herokuapp.com/api/authUser/login';
    URL_API2 = 'https://tendenciasg8.herokuapp.com/api/authBusiness/login';
    userlogin: User={};
    userBusiness: Business={};
    constructor(private http: HttpClient){
    }

    loginUser(user:User){
        return this.http.post(this.URL_API1,user);
    }

    loginBusiness(business : Business){
        return this.http.post(this.URL_API2,business);
    }


}