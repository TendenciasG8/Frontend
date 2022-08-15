import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/core/services/authLogin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  constructor(
    private router: Router,
    public authServices: AuthServices
  ) {
    
   }

  ngOnInit(): void {
    if(this.authServices.userBusiness.ruc){
      console.log(this.authServices.userBusiness.ruc);
    }
    if(this.authServices.userlogin.ruc){
      console.log(this.authServices.userlogin.ruc);
    }
  }

  payTributes(){
    void this.router.navigateByUrl('menu/pagoTributos');
  }

  deudas(){
    void this.router.navigateByUrl('menu/debts');
  }
  deudasBancos(){
    void this.router.navigateByUrl('menu/debtBs');
  }
  logOut(){
    void this.router.navigateByUrl('');
  }
}
