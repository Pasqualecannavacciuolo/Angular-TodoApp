import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() newItemEvent = new EventEmitter<boolean>();

  showForm: boolean = false;

  addItem() {
    this.newItemEvent.emit(this.showForm);
  }

}
