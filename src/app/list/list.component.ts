import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dataSource: Item[] = [];
  newItem: Item | undefined;
  displayedColumns: string[] = ['id', 'contenuto', 'fatto'];

  

  constructor(private http: HttpClient) {
    this.getAll();
  }
  

  getAll() {
    this.http
      .get<Item[]>('http://localhost:3000/lista')
      .subscribe((result) => this.dataSource = result);
  }


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
            });
        }
      }
    }
  }
}
