import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }