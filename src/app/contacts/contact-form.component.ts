import { Component, Input } from '@angular/core';

@Component({
  selector: 'contact-form',
  template: `
    <div class="form-group">
      <label class="control-label">Name</label>
      <input class="form-control" [(ngModel)]=" c.name ">
    </div>

    <div class="form-group">
      <label class="control-label">E-mail</label>
      <input class="form-control" [(ngModel)]=" c.email ">
    </div>
  `
})
export class ContactFormComponent {
  @Input()
  c = null;
}
