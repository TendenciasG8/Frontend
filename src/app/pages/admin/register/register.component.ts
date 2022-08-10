import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concat } from 'rxjs';
import { Role } from 'src/app/core/models/role';
import { Specialty } from 'src/app/core/models/specialty';
import { User } from 'src/app/core/models/user';
import { RoleServices } from 'src/app/core/services/role.service';
import { SpecialityServices } from 'src/app/core/services/speciality.service';
import { UserServices } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roleSelected:Role={};
  specialtySelected:Specialty={};
  userRegister: User={};
  objectRole:any;
  objectSpecialty:any=null;
  emailUser:string='';
  usernameUser:string='';
  alertSuccess:boolean=false;
  alertDanger:boolean=false;

  constructor(public roleServices: RoleServices,
    public specialtyServices: SpecialityServices,
    public userServices: UserServices) { 
      
    }

  ngOnInit(): void {
    this.getRole();
  }

  onChangeRole(){
    var _idRole:any = this.roleSelected;
    var cbza = '{ "_id":"';
    var cola = '"}';
    cbza = cbza.concat(_idRole);
    cbza = cbza.concat(cola);
    this.objectRole = JSON.parse(cbza);
    console.log(this.objectRole);
    if(this.roleSelected=='60dbbb5283b24752ac7025b8'){
      this.getSpecialty();
    }
  }  

  onChangeSpecialty(){
    var _idSpec:any = this.specialtySelected;
    var cbza = '{ "_id":"';
    var cola = '"}';
    cbza = cbza.concat(_idSpec);
    cbza = cbza.concat(cola);
    this.objectSpecialty = JSON.parse(cbza);
    console.log(this.objectSpecialty);
  }

  getRole(){
    this.roleServices.getRole().subscribe(
      res=>{
        this.roleServices.roleUser = res;
      },
      err => console.log(err)
    )
  }

  getSpecialty(){
    this.specialtyServices.getSpeciality().subscribe(
      res=>{
        this.specialtyServices.specRegisterUser=res;
        console.log(res);
      },
      err=>console.log(err)
    )
  }

  addUser(Form:NgForm){
    Form.value.status=true;
    Form.value.role=this.objectRole;
    if(this.roleSelected=='60dbbb5283b24752ac7025b8')
      Form.value.specialty=this.objectSpecialty;
    Form.value.ubigeo=12345;
    Form.value.username= this.getUsername(Form.value.name,Form.value.lastname_p,Form.value.lastname_m);
    Form.value.email = Form.value.username.concat("@sante.com");
    this.emailUser=Form.value.email;
    this.usernameUser=Form.value.username;
    Form.value.password=Form.value.username;
    console.log(Form.value);
    this.userServices.createUser(Form.value).subscribe(
      res=>{
        this.alertSuccess=true;
        console.log(res);
        Form.reset();
      },
      err=>{
        this.alertDanger=true;
        console.log(err);
        Form.reset();
      }
    )
  }

  //erick lazaro llacua --- elazarol
  getUsername(name:string, lastname_p:string, lastname_m:string):string{
    var pName = name.charAt(0);
    var pLastnameM = lastname_m.charAt(0);
    lastname_p= lastname_p.concat(pLastnameM);
    pName= pName.concat(lastname_p);
    return pName;
  }

  alertClose(){
    this.alertDanger=false;
    this.alertSuccess=false;
  }

}
