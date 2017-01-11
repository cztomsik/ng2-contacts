import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $http from 'axios';

@Component({
  selector: 'contact-detail',
  template: `
    <div>ContactDetail</div>
    <div *ngIf=" c ">
      <a [routerLink]=" ['/contacts', c.id, 'edit'] ">Edit</a>

      <table>
        <tr>
          <th>Name</th>
          <td>{{ c.name }}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{ c.email }}</td>
        </tr>
      </table>
    </div>
  `
})
export class ContactDetailComponent {
  c = null;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      $http.get(`https://contacts-app-356ac.firebaseio.com/contacts/${params.id}.json`).then((res) => {
        this.c = res.data;
      });
    });
  }
}
