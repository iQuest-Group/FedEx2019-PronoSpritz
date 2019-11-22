import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit {

  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

  public get isLoggedIn()
  {
    return !!localStorage.getItem('token');
  }

}
