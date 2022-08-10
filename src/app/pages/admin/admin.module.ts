import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { RegisterComponent } from './register/register.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, RegisterComponent, UsersComponent, UserDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModuleModule,
    FlexLayoutModule,
    FormsModule
    ],
})
export class AdminModule {}