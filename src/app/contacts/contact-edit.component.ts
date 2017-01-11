import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import $http from 'axios';

@Component({
  selector: 'contact-edit',
  template: `
    <h1>Edit contact</h1>

    <contact-form [c]=" c " *ngIf=" c "></contact-form>

    <button class="btn btn-primary" (click)=" save() ">Save</button>
  `
})
export class ContactEditComponent {
  c = null;

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      $http.get(`https://contacts-app-356ac.firebaseio.com/contacts/${params.id}.json`).then((res) => {
        this.c = res.data;
      });
    });
  }

  save(){
    $http.put(`https://contacts-app-356ac.firebaseio.com/contacts/${this.c.id}.json`, this.c).then(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
