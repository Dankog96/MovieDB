import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  @Output() logged = new EventEmitter<boolean>(false);
  @ViewChild('login') login: NgForm;
  isLoading = false;

  constructor(private loginService: RegisterService, private router: Router, private route: ActivatedRoute) {}

  onLogin() {
    this.isLoading = true;
    const mail = this.login.value.mail;
    const pass = this.login.value.password;
    this.loginService.login(mail, pass).subscribe(
      success => {
        this.router.navigate(['/home'], {relativeTo: this.route});
        this.isLoading = false;
      }, error => {
        console.log('tapuu', error);
        this.isLoading = false;
      }
    );
  }
}
