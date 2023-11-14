import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Page } from '../page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    @Input() selectedPage!: Page;
    @Output() reset = new EventEmitter<number>();
    buffer: string = "";

    ngOnInit(){
      this.buffer = this.selectedPage?.content;
    }

    save(){
      this.selectedPage.content = this.buffer;
    }

    back(){
      console.log(this.back);
      this.reset.emit(-1);
    }
}
