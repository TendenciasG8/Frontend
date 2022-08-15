import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { DebtsServices } from 'src/app/core/services/debts.service';
import { Debts } from 'src/app/core/models/debts';
import { AuthServices } from 'src/app/core/services/authLogin.service';

interface Tributes {
  codigo: string;
  valor: string;
}
@Component({
  selector: 'app-pay-tributes',
  templateUrl: './pay-tributes.component.html',
  styleUrls: ['./pay-tributes.component.css'],
})

export class PayTributesComponent implements OnInit {
  tributes: Tributes[] = [
    { codigo: '1011', valor: 'IGV-OPER. INT. -CTA.PROPIA' },
    { codigo: '3031', valor: 'RENTA 3RA CATEGORIA' },
    { codigo: '3121', valor: 'RENTA-REGIMEN MYPE TRIBUTARIO' },
    { codigo: '3111', valor: 'RENTA-REGIMEN ESPECIAL' },
    { codigo: '3052', valor: 'RENTA-5TA CATEGORIA RETENCIONES' },
    { codigo: '5210', valor: 'ESSALUD SEG REGULAR TRABAJADOR' },
    { codigo: '5310', valor: 'SNP-LEY 19990' },
  ];
  tributoElegido : string="";
  bancoElegido: string="";
  debt : Debts={};
  confirmUser: boolean =false;
  confirmBusiness :boolean=false;
  nroOrden : number=0;
  constructor(private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public debtsServices : DebtsServices,
    public authServices : AuthServices
    ) { }

  ngOnInit(): void {
    if(this.authServices.userBusiness.ruc){
      console.log(this.authServices.userBusiness.ruc);
      this.confirmBusiness=true;
    }
    if(this.authServices.userlogin.ruc){
      console.log(this.authServices.userlogin.ruc);
      this.confirmUser=true;
    }
  }

  openDialog() {
    this.dialog.open(DialogPayDialog);
  }

  debts(Form: NgForm){
    console.log("Form",Form.value);
    this.dialog.open(DialogPayDialog);
    this.debt.date_of_debt= Form.value.date_of_debt;
    this.debt.description=Form.value.description;
    this.debt.amount=Form.value.amount;
    if(this.confirmUser){
      this.debt.ruc= this.authServices.userlogin.ruc;
    }
    if(this.confirmBusiness){
      this.debt.ruc= this.authServices.userBusiness.ruc;
    }
    this.debt.status = true;
    console.log(this.debt);
    
    this.debtsServices.createDebts(this.debt).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    )
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-pay.component.html',
})
export class DialogPayDialog {}
