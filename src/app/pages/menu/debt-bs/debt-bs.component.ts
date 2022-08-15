import { Component, OnInit } from '@angular/core';
import { DebtBanco } from 'src/app/core/models/debtBs';
import { DebtBsServices } from 'src/app/core/services/debtBs.service';

@Component({
  selector: 'app-debt-bs',
  templateUrl: './debt-bs.component.html',
  styleUrls: ['./debt-bs.component.css']
})
export class DebtBsComponent implements OnInit {
  tableDebtBs : DebtBanco[]=[{}];
  constructor(
    public debtBsServices : DebtBsServices,
  ) { }

  ngOnInit(): void {
    this.getDebtBs();
  }

  getDebtBs(){
    this.debtBsServices.getDeudas().subscribe(
      res=>{
        console.log(res)
        this.tableDebtBs=res;
      },
      err=>console.log(err)
    )
  }
}
