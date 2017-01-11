import { Component } from '@angular/core';
import $http from 'axios';

@Component({
  selector: 'contacts',
  template: `
    <div>Contacts</div>

    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr *ngFor=" let c of contacts ">
        <td><a [routerLink]=" ['/contacts', c.id] ">{{ c.name }}</a></td>
        <td>{{ c.email }}</td>
      </tr>
    </table>
  `
})
export class ContactsComponent {
  contacts = [];

  constructor(){
    $http.get('https://contacts-app-356ac.firebaseio.com/contacts.json').then((res) => {
      this.contacts = res.data;
    });
  }
}
