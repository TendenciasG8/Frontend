import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuRoutingModule } from './menu-routing.module';
import { PayTributesComponent } from './pay-tributes/pay-tributes.component';
import { DebtsComponent } from './debts/debts.component';
import { DebtBsComponent } from './debt-bs/debt-bs.component';


@NgModule({
  declarations: [MenuComponent, PayTributesComponent, DebtsComponent, DebtBsComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    MenuRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    ],
})
export class MenuModule {}