import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  constructor(private authService: AuthService) {

  }

  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);
  }
}