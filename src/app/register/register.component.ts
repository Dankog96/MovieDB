import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RegisterService } from '../services/register.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('register') register: NgForm;

  constructor(private registerService: RegisterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onRegister() {
    const user = this.register.value.username;
    const pass = this.register.value.password;
    const mail = this.register.value.email;

    this.registerService.register(user, pass, mail).subscribe(success => {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }, error => {
      console.log('error', error);
    });
  }

  cancel() {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }

}
