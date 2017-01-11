import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $http from 'axios';

@Component({
  selector: 'contact-detail',
  template: `
    <h3>Contact detail</h3>
    <div *ngIf=" c ">
      <a class="btn btn-default" [routerLink]=" ['/contacts', c.id, 'edit'] ">Edit</a>

      <table class="table" style="margin-top: 20px">
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
