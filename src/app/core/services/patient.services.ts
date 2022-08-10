import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Patient } from '../models/patient';
@Injectable({
    providedIn : 'root'
})

export class PatientServices{
    URL_API = 'https://sd-g4-medical-records-backend.herokuapp.com/api/patients';
    //URL_API = 'localhost:3000/api/patients';

    //para buscar por dni
    patientsDni: Patient={
        name:'',
        username:'',
    };

    patientsAppoiments: Patient={};

    patientRecord:Patient={};
    patientMedicine: Patient={};

    //para registrar
    patientSelected: Patient={
        name:'',
        lastname_m:'',
        lastname_p:'',
        gender:'',
        email:'',
        status:true,
    }
    constructor(private http: HttpClient){
        
    }
    createPatient(patient:Patient){
        return this.http.post(this.URL_API,patient);
    }
    getPatients(): Observable<any>{
        return this.http.get<any>(this.URL_API);
    }
    getPatientsByDni(dni: any ): Observable<any>{
        return this.http.get<any>(this.URL_API+"/dni/"+dni);
    }
    deletePatient(_id:any){
        return this.http.delete(this.URL_API+"/"+_id);
    }

    putEmployee(patient:Patient){
        return this.http.put(this.URL_API+"/dni/"+patient.dni,patient);
    }
}