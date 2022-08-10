import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { landingComponent } from './landing.component';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [landingComponent],
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    ],
})
export class landingModule {}