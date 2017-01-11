import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    HEADER,
    <a routerLink="/home">Home</a>
    <a routerLink="/contacts">Contacts</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
