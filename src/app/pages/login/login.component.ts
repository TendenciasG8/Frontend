import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.models';
import { LOGINS_DATA } from 'src/app/mock/login.mock';
import { USERS_DATA } from 'src/app/mock/user.mock';
import { UserServices } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  controlUser = new FormControl();
  controlPass = new FormControl();
  user!: User;
  panelOpenState = false;
  constructor(private router:Router,
    public userServices: UserServices
    ) { 

  }
  ngOnInit(): void {
  }

  login(): void {
    if (this.user = USERS_DATA.filter(user => user.username == this.controlUser.value)[0]) {
      if (this.user.password == this.controlPass.value) {
        console.log(this.user.id_role);
        if (this.user.id_role[0] == "R2") {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/user');
        }
        LOGINS_DATA.pop();
        LOGINS_DATA.push({ username: this.controlUser.value, password: this.controlPass.value });
      }
      else {
        alert('username o password erroneos');
      }
    } else {
      alert('username o password erroneos');
    }
  }

  login2(){
    
  }

  addUser(Form: NgForm){
    console.log(Form.value);
    this.userServices.createUser(Form.value).subscribe(
      res=> console.log(res),
      err => console.error(err)
    )
  }


}

