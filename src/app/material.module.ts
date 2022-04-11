import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule]
})
export class MaterialModule { }