import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/core/services/authLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authServices: AuthServices,
    private router : Router,
  ) { }

  ngOnInit(): void {
  }

  loginUser(Form : NgForm){
    this.authServices.loginUser(Form.value).subscribe(
      res=>{
        console.log("respuesta",res);
        void this.router.navigateByUrl('menu');
      },
      err=>{
        console.log(err);
      }
    )
  }

  loginBusiness(Form : NgForm){
    this.authServices.loginBusiness(Form.value).subscribe(
      res=>{
        console.log("respuesta",res);
        this.router.navigateByUrl('menu');
      },
      err=>{
        console.log(err);
      }
    )
  }

}
