import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-form',
  template: `
    <input [(ngModel)]=" c.name ">
    <input [(ngModel)]=" c.email ">
  `
})
export class ContactFormComponent {
  @Input()
  c = null;
}
