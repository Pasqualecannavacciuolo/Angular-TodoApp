import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  dataSource: Item[] = [];
  displayedColumns: string[] = ['id', 'contenuto', 'fatto'];

  app = new AppComponent();

  @Input() showForm: boolean = this.app.showForm

  constructor(private http: HttpClient) {
    this.getAll();
  }
  

  getAll() {
    return this.http
      .get<Item[]>('http://localhost:3000/lista')
      .subscribe((result) => {
        this.dataSource = result;
      });
  }// Fine GETALL


  deleteItem(selected: any): void {
    console.log(
      selected.target.name,
      selected.target.value,
      selected.target.checked
    );
    if (selected.target.checked) {
      for (let i = 0; i < this.dataSource.length; i++) {
        if (this.dataSource[i].id == selected.target.name) {
          this.http
            .delete<any>(`http://localhost:3000/lista/${this.dataSource[i].id}`)
            .subscribe(() => {
              const index = this.dataSource.indexOf(this.dataSource[i]);
              this.dataSource.splice(index, 1);
              this.getAll();  // Aggiorno la lista in tempo reale
            });
        }
      }
    }
  }// Fine DELETE

  // INSERT NEW ITEM
  todoForm = new FormGroup({
    content: new FormControl('',
      [
        Validators.required,
        Validators.minLength(4)
      ]
    ),
  });

  newItem: Item = {
    contenuto: ''
  }

  // METHOD TO ADD NEW ITEM
  onSubmit() {
    let form_content = this.todoForm.get('content')?.value;
    this.newItem.contenuto = form_content;
    this.newItem.fatto = false;
    this.http
    .post<Item>('http://localhost:3000/lista',this.newItem)
    .subscribe((result) => {
      console.log(result);
      this.dataSource.push(this.newItem);
      this.getAll();
    })
  }

}
