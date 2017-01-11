import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="navbar navbar-default navbar-static-top">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a routerLink="/home">Home</a></li>
          <li><a routerLink="/contacts">Contacts</a></li>
        </ul>
      </div>
    </div>

    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
