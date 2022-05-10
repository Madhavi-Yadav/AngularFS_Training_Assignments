import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
  ],
  imports: [
    MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatIconModule,  
  MatDialogModule, 
  MatTableModule,
  MatMenuModule,
    FormsModule
    ],

  exports : [
    MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatIconModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
  ]
})
export class MymaterialModule { }
