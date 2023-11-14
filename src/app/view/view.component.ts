import { Component, Input } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() selectedPage!: Page;
}
