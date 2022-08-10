import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { PatientServices } from 'src/app/core/services/patient.services';
import { Specialty } from 'src/app/core/models/specialty'; 
import { SpecialityServices } from 'src/app/core/services/speciality.service';
import { User } from 'src/app/core/models/user';
import { Record } from 'src/app/core/models/record';
import { UserServices } from 'src/app/core/services/user.service';
import { RecordServices } from 'src/app/core/services/record.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit {
  userSelected : User={}; 
  userBySpecialty: User[]=[];
  SpecialtySelected: Specialty={ ////
    id:'',
    name:''
  };
  registerRecord : Record={
    dni_patient:0,
    dni_medic:0,
    diagnosis:'',
    prescriptions:'',
    specialty:''
  }; 
  booleanAlertCorrect:boolean=false;
  booleanAlertIncorrect:boolean=false;
  public nombreCompleto : string = ""; 
  public dniMedicR:any; 


  
  constructor(
    public patientServices: PatientServices,
    public specialtyServices: SpecialityServices,
    public userServices: UserServices,
    public recordServices: RecordServices,
  ) {
   }

  ngOnInit(){
    this.getSpecialty();
  }

  getSpecialty(){
    this.specialtyServices.getSpeciality().subscribe(
      res=>{
        this.specialtyServices.specHC = res 
      },
      err => console.log(err)
    )
  }

  getUsersBySpecialties(id: any){
    this.userServices.getUserBySpecialties(id).subscribe(
      res=>{
        this.userBySpecialty = res;
      },
      err=>console.log(err)
    )
  }

  onChangeSpec(){
    this.getUsersBySpecialties(this.SpecialtySelected);
    console.log(this.SpecialtySelected);
    //capturando id especialidad
    var a:any = this.SpecialtySelected 
    var llave = '{ "_id":"';
    var final = '"}';
    llave = llave.concat(a);
    llave = llave.concat(final);
    var jsonCompleto = JSON.parse(llave);
    this.registerRecord.specialty= jsonCompleto;
  }

  onChangeUser(){
    //capturando dni de medico
    this.dniMedicR = this.userSelected;
    this.registerRecord.dni_medic = parseInt(this.dniMedicR);
    console.log("captura dnimedic:",this.registerRecord.dni_medic);
  }
  
  getInfoHC(Form: NgForm){
    this.patientServices.getPatientsByDni(Form.value.dniPatient).subscribe(
      res=>{
        //Captura dni paciente
        this.registerRecord.dni_patient = res.dni;
        console.log("captura dnipaciente:",this.registerRecord.dni_patient);
        //para mostrar el nombre completo
        this.nombreCompleto = res.name+" "+res.lastname_p+" "+res.lastname_m;
      },
      err=>console.log(err)
    )
  }
  addRecord(Form:NgForm){
    this.registerRecord.num_history = this.registerRecord.dni_patient;
    console.log(this.registerRecord);
    this.recordServices.addRecord(this.registerRecord).subscribe(
      res=>{
        console.log("SE HA REGISTRADO CORRECTAMENTE!!..",res);
        Form.reset();
        this.booleanAlertCorrect=true;
      },
      err=>{
        console.log(err);
        this.booleanAlertIncorrect=true;
      }
    )
  }

  closeAlert(){
    this.booleanAlertCorrect=false;
    this.booleanAlertIncorrect=false;

  }

}