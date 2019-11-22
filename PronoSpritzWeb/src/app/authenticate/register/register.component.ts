import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public hide: boolean = true;
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email, password, confirmPassword } = this.registerForm.value;
    if (password === confirmPassword) {
      this.userService.login(email, password).pipe(
        catchError((error) => {
          localStorage.setItem('token', 'asdsada');
          this.router.navigate(['']);
          throw error;
        })
      ).subscribe(() => {
        this.router.navigate(['']);
      });
    }
    else {
      this.registerForm.reset();
    }
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
