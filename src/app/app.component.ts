import { Component } from '@angular/core';
import { Page } from './page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Markdown-Editor';
  pages: Page[] = [{title: "sample", content: "# This is markdown"}];
  selected: number = -1;
  readonly: boolean = true;

  append(){
    this.pages.push({
      title: "Untitled",
      content: "## Edit you markdown here!!"
    })

    this.selected = this.pages.length - 1;
    this.readonly = false;
  }

  remove(id: number){
    this.pages = this.pages.filter((x,i)=> i!=id)
  }
  
}