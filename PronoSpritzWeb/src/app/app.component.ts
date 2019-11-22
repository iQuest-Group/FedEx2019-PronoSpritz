import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prono Spritz';

  
  public get isLoggedIn()
  {
    return !!localStorage.getItem('token');
  }
}
