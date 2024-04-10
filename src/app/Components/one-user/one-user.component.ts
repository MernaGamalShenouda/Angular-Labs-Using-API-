import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './one-user.component.html',
  styles: ``
})
export class OneUserComponent {
  @Input() user:any;
}
