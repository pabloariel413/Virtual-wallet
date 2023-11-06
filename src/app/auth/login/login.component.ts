import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 myGroup: FormGroup<{ email: FormControl<any>, clave: FormControl<any> }>;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      email: new FormControl(),
      clave: new FormControl()
  });
  }

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }

}
