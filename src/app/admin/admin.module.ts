import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListConnectiveComponent } from './list-connective/list-connective.component';
import { ImportConnectiveComponent } from './import-connective/import-connective.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { UpdateConnectiveComponent } from './update-connective/update-connective.component';
import {MatSelectModule} from '@angular/material/select';
import { TestComponent } from './test/test.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [ListConnectiveComponent, ImportConnectiveComponent, UpdateConnectiveComponent, TestComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ]
})
export class AdminModule { }
