import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Form, NgForm } from '@angular/forms';
import { SpecialityServices } from 'src/app/core/services/speciality.service';
import { UserServices } from 'src/app/core/services/user.service';
import { Specialty } from 'src/app/core/models/specialty'; ///////////
import { User } from 'src/app/core/models/user'; ////////////
import { Record } from 'src/app/core/models/record'; ///////////////
import { PatientServices } from 'src/app/core/services/patient.services';
import { Patient } from 'src/app/core/models/patient';
import { MedicalRecord } from 'src/app/core/models/medicalRecord';
import { RecordServices } from 'src/app/core/services/record.service';
import { MedicalRecordServices } from 'src/app/core/services/medicalRecord.services';
import { DataSource } from '@angular/cdk/collections';
//tabla
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css'],
})

export class HistoriesComponent implements AfterViewInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['Nro', 'Medico', 'DNI', 'Especialidad'];

  tableRecord: Record[]=[{}];
  //
  patientRecord : Patient={};
  medicalRecord : MedicalRecord={};
  booleanTable:boolean=false;
  public nombreCompletoR: string = "";
  public blood_type:string = "";
  public organ_donor:string = "";
  public familyMedicalHistory ="";


  constructor( 
    public medicalRecServices:MedicalRecordServices,
    public recordServices: RecordServices,
    public patientServices: PatientServices,
    ) {
    }

  ngOnInit(): void {
  }
  
  
  //Medical Records
  getInfoMedicalR(Form : NgForm){
    this.patientServices.getPatientsByDni(Form.value.dni).subscribe(
      res=>{
        this.patientRecord=res;
        //para mostrar el nombre completo
        this.nombreCompletoR = res.name+" "+res.lastname_p+" "+res.lastname_m;
        this.getMedicalRecord(Form.value.dni);
        this.getRecordByDniPatient();
      },
      err=>console.log(err)
    )
  }

  getMedicalRecord(dni:any){
    this.medicalRecServices.getMedicalRecByDni(this.patientRecord.dni).subscribe(
      res=>{
        this.blood_type = res.blood_type;
        var booleanDonor: boolean = res.organ_donor;
        this.organ_donor = String(booleanDonor);
        this.familyMedicalHistory = res.family_medical_history;
        if(this.organ_donor=="true"){
          this.organ_donor = 'Sí';
        }else{
          this.organ_donor ='No'
        }
        this.booleanTable=true;
      },
      err=>console.log(err)
    )
  }
  newSearch(Form: NgForm){
    Form.reset();
    this.nombreCompletoR='';
    this.patientRecord= new Patient;
    this.blood_type='';
    this.organ_donor='';
    this.familyMedicalHistory='';
    this.booleanTable=false;
  }
  //Tabla Records 
  getRecordByDniPatient(){
    this.recordServices.getRecordByDni(this.patientRecord.dni).subscribe(
      res=>{
        console.log("res",res);
        this.tableRecord=res;
      },
      err=>console.log(err)
    )
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
}
export interface RecordElement{
  dni_medic:number;
  nombre_specialty: string;
  nombre_medic: string;
  diagnosis:string;
  prescriptions:string;
}
const ELEMENT_DATA : RecordElement[]=[{
  dni_medic:1,
  nombre_specialty:'',
  nombre_medic:'',
  diagnosis:'',
  prescriptions:''
}];



/*
let b1 = '2016-08-01T10:00:00';
let newd1 = new Date(b1);
let b2 = '2016-08-01T10:30:00';
let newd2 = new Date(b2);
let b3 = '2016-08-01T11:00:00';
let newd3 = new Date(b3);
let b4 = '2016-08-01T11:30:00';
let newd4 = new Date(b4);

let b5 = '2017-08-01T10:00:00';
let newd5 = new Date(b5);
let b6 = '2017-08-01T10:30:00';
let newd6 = new Date(b6);
let b7 = '2017-08-01T11:00:00';
let newd7 = new Date(b7);
let b8 = '2017-08-01T11:30:00';
let newd8 = new Date(b8);

let b9 = '2018-08-01T00:00:00';
let newd9 = new Date(b9);
let b10 = '2018-08-01T00:00:00';
let newd10 = new Date(b10);
let b11 = '2018-08-01T00:00:00';
let newd11 = new Date(b11);
let b12 = '2018-08-01T00:00:00';
let newd12 = new Date(b12);

let b13 = '2019-08-01T00:00:00';
let newd13 = new Date(b13);
let b14 = '2019-08-01T00:00:00';
let newd14 = new Date(b14);
let b15 = '2019-08-01T00:00:00';
let newd15 = new Date(b15);
let b16 = '2019-08-01T00:00:00';
let newd16 = new Date(b16);

let b17 = '2020-08-01T00:00:00';
let newd17 = new Date(b17);
let b18 = '2020-08-01T00:00:00';
let newd18 = new Date(b18);
let b19 = '2020-08-01T00:00:00';
let newd19 = new Date(b19);
let b20 = '2020-08-01T00:00:00';
let newd20 = new Date(b20);

export interface Reports {
  idreporte: string;
  fecha: string;
  tipo: string;
  reporte: string;
}

const REPORTS_DATA: Reports[] = [
  { idreporte: 'D001', fecha: (newd1.getDay() + 1) + "/" + (newd1.getMonth() + 1) + "/" + newd1.getFullYear(), tipo: 'Triaje', reporte: 'ta bien' },
  { idreporte: 'D002', fecha: (newd2.getDay() + 1) + "/" + (newd2.getMonth() + 1) + "/" + newd2.getFullYear(), tipo: 'Médicina', reporte: 'no ta bien' },
  { idreporte: 'D003', fecha: (newd3.getDay() + 1) + "/" + (newd3.getMonth() + 1) + "/" + newd3.getFullYear(), tipo: 'Pediatría', reporte: 'ta mal' },
  { idreporte: 'D004', fecha: (newd4.getDay() + 1) + "/" + (newd4.getMonth() + 1) + "/" + newd4.getFullYear(), tipo: 'Traumatología', reporte: 'ta muy mal' },
  { idreporte: 'D005', fecha: (newd5.getDay() + 1) + "/" + (newd5.getMonth() + 1) + "/" + newd5.getFullYear(), tipo: 'Triaje', reporte: 'ta bien' },
  { idreporte: 'D006', fecha: (newd6.getDay() + 1) + "/" + (newd6.getMonth() + 1) + "/" + newd6.getFullYear(), tipo: 'Médicina', reporte: 'no ta bien' },
  { idreporte: 'D007', fecha: (newd7.getDay() + 1) + "/" + (newd7.getMonth() + 1) + "/" + newd7.getFullYear(), tipo: 'Pediatría', reporte: 'ta mal' },
  { idreporte: 'D008', fecha: (newd8.getDay() + 1) + "/" + (newd8.getMonth() + 1) + "/" + newd8.getFullYear(), tipo: 'Traumatología', reporte: 'ta muy mal' },
  { idreporte: 'D009', fecha: (newd9.getDay() + 1) + "/" + (newd9.getMonth() + 1) + "/" + newd9.getFullYear(), tipo: 'Triaje', reporte: 'ta bien' },
  { idreporte: 'D010', fecha: (newd10.getDay() + 1) + "/" + (newd10.getMonth() + 1) + "/" + newd10.getFullYear(), tipo: 'Médicina', reporte: 'no ta bien' },
  { idreporte: 'D011', fecha: (newd11.getDay() + 1) + "/" + (newd11.getMonth() + 1) + "/" + newd11.getFullYear(), tipo: 'Pediatría', reporte: 'ta mal' },
  { idreporte: 'D012', fecha: (newd12.getDay() + 1) + "/" + (newd12.getMonth() + 1) + "/" + newd12.getFullYear(), tipo: 'Traumatología', reporte: 'ta muy mal' },
  { idreporte: 'D013', fecha: (newd13.getDay() + 1) + "/" + (newd13.getMonth() + 1) + "/" + newd13.getFullYear(), tipo: 'Triaje', reporte: 'ta bien' },
  { idreporte: 'D014', fecha: (newd14.getDay() + 1) + "/" + (newd14.getMonth() + 1) + "/" + newd14.getFullYear(), tipo: 'Médicina', reporte: 'no ta bien' },
  { idreporte: 'D015', fecha: (newd15.getDay() + 1) + "/" + (newd15.getMonth() + 1) + "/" + newd15.getFullYear(), tipo: 'Pediatría', reporte: 'ta mal' },
  { idreporte: 'D016', fecha: (newd16.getDay() + 1) + "/" + (newd16.getMonth() + 1) + "/" + newd16.getFullYear(), tipo: 'Traumatología', reporte: 'ta muy mal' },
  { idreporte: 'D017', fecha: (newd17.getDay() + 1) + "/" + (newd17.getMonth() + 1) + "/" + newd17.getFullYear(), tipo: 'Triaje', reporte: 'ta bien' },
  { idreporte: 'D018', fecha: (newd18.getDay() + 1) + "/" + (newd18.getMonth() + 1) + "/" + newd18.getFullYear(), tipo: 'Médicina', reporte: 'no ta bien' },
  { idreporte: 'D019', fecha: (newd19.getDay() + 1) + "/" + (newd19.getMonth() + 1) + "/" + newd19.getFullYear(), tipo: 'Pediatría', reporte: 'ta mal' },
  { idreporte: 'D020', fecha: (newd20.getDay() + 1) + "/" + (newd20.getMonth() + 1) + "/" + newd20.getFullYear(), tipo: 'Traumatología', reporte: 'ta muy mal' },
];
 */