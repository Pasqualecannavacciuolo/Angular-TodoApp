import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  showForm = false;

  addItem() {
    if(this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
  }

}
