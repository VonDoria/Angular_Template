import { ComponentModule } from './../components/component.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomePageComponent,
    ButtonsComponent,
    DatapickerComponent,
    SelectComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ComponentModule
  ],
  providers: []
})
export class PagesModule { }
