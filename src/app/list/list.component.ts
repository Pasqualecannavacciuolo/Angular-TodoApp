import { Component, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  dataSource: Item[] = [];
  displayedColumns: string[] = ['id', 'contenuto', 'fatto'];

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http
      .get<Item[]>('http://localhost:3000/lista')
      .subscribe((result) => this.dataSource = result);
  }

}
