import { Component, OnInit } from '@angular/core';
import { Debts } from 'src/app/core/models/debts';
import { DebtsServices } from 'src/app/core/services/debts.service';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {
  tableDebts : Debts[]=[{}];
  constructor(
    public debtsServices: DebtsServices,
  ) { }

  ngOnInit(): void {
    this.getDebts();
  }

  
  getDebts(){
    this.debtsServices.getDebts().subscribe(
      res=>{
        console.log(res);
        this.tableDebts=res;
      },
      err=>console.log(err)
    )
  }
}
