import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RegisterServiceService } from '../services/register-service.service';
import { loginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = 'API';

  constructor(
    private service: loginServiceService,
    private router: Router
  ){
  }

  logout(){
    this.service.LogoutUser().subscribe(success => {
      this.router.navigate(['home']);
    },err => console.log(err));
  }

}
