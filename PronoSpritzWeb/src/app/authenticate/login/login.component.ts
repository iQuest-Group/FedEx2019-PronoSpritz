import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide: boolean = true;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });

    localStorage.setItem("access_token", "123");
  }

  onSubmit()
  {
    const {email, password} = this.loginForm.value;
    this.userService.login(email, password).subscribe(() => {
      this.router.navigate(['login']);
    });

    localStorage.setItem('access_token', 'asdasdsad');
  }

  goToRegister()
  {
    this.router.navigate(['register']);
  }
}
