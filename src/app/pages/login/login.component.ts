import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { SessionsService } from 'src/app/services/sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private sessionsService: SessionsService
  ){}
  
  onSubmit(){
    this.sessionsService.login(this.loginForm.value).subscribe((data: any) =>{
      if (data.token){
        sessionStorage.setItem("Token", data.token)
      }
    })
  }
}

