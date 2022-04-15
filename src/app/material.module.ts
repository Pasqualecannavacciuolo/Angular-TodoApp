import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field"; 
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatInputModule, MatFormFieldModule],
  exports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule { }