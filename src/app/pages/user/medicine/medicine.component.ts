import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MedicalRecord } from 'src/app/core/models/medicalRecord';
import { MedicalRecordServices } from 'src/app/core/services/medicalRecord.services';
import { PatientServices } from 'src/app/core/services/patient.services';
import { ENSUREDS_DATA } from '../../../mock/ensured.mock';
@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicalRecordRegister : MedicalRecord={};
  nombreCompletoM: string="";
  booleanAlertCorrect:boolean=false;
  booleanAlertIncorrect:boolean=false;
  organDonorSelected:string='';
  constructor(
    public patientServices:PatientServices,
    public _medicalRecordServices:MedicalRecordServices
  ) {

  }

  ngOnInit() {
      
  }

  getPatientForMedicine(Form: NgForm){
    this.patientServices.getPatientsByDni(Form.value.dni).subscribe(
      res=>{
        this.medicalRecordRegister.dni_patient=res.dni;
        this.medicalRecordRegister.num_history=res.dni;
        //para mostrar el nombre completo
        this.nombreCompletoM = res.name+" "+res.lastname_p+" "+res.lastname_m;
      },
      err=>console.log(err)
    )
  }


  registerMedicalRecord(Form:NgForm){
    console.log(this.medicalRecordRegister);
    
    this._medicalRecordServices.addMedicalRecord(this.medicalRecordRegister).subscribe(
      res=>{
        console.log(res);
        this.booleanAlertCorrect=true;
        Form.reset();
        this.resetForm();
      },
      err=>{
        console.log(err);
        this.booleanAlertIncorrect=true;
      }
    )
  }

  resetForm(){
    this.organDonorSelected='';
    this.medicalRecordRegister=new MedicalRecord;
    this.nombreCompletoM='';
    
  }

  onChangeOrganDonor(){
    const str1='true';
    if(str1===this.organDonorSelected){
      this.medicalRecordRegister.organ_donor=true;
    }else{
      this.medicalRecordRegister.organ_donor=false;
    }
  }
  

  closeAlert(){
    this.booleanAlertCorrect=false;
    this.booleanAlertIncorrect=false;
  }

}

