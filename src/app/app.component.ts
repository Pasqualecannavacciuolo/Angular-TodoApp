import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  

  title = 'my-app';
  
 showForm = false;

  addItem() {
    if(this.showForm) {
      this.showForm = false;
    } else {
      this.showForm = true;
    }
    console.log(this.showForm)
  }

}
