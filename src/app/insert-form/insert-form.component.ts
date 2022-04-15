import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Item } from '../model/item';


@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent {

  constructor(private http: HttpClient) {}

  profileForm = new FormGroup({
    content: new FormControl(''),
  });

  newItem: Item = {
    contenuto: ''
  }

  
  onSubmit() {
    let form_content = this.profileForm.get('content')?.value;
    this.newItem.contenuto = form_content;
    this.newItem.fatto = false;
    this.http
    .post<Item>('http://localhost:3000/lista',this.newItem)
    .subscribe((result) => console.log(result));
  }

}
