import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  @Input()
  public title: string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public get isLoggedIn()
  {
    return !!localStorage.getItem('access_token');
  }

  public login()
  {
    this.router.navigate(['login']);
  }

  public logout()
  {
    localStorage.removeItem('access_token');
    this.router.navigate(['']);
  }

}
