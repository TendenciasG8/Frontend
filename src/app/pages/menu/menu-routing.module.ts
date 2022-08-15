import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtBsComponent } from './debt-bs/debt-bs.component';
import { DebtsComponent } from './debts/debts.component';
import { MenuComponent } from './menu.component';
import { PayTributesComponent } from './pay-tributes/pay-tributes.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children:[
      {
        path: 'pagoTributos',
        component: PayTributesComponent,
      },
      {
        path: 'debts',
        component: DebtsComponent,
      },
      {
        path: 'debtBs',
        component: DebtBsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
