import { Component } from '@angular/core';
import { Page } from './page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Markdown-Editor';
  pages: Page[] = [{title: "sample", id:1, lines:["text", "texts"]}];
}
