import { TableComponent } from './pages/table/table.component';
import { SelectComponent } from './pages/select/select.component';
import { DatapickerComponent } from './pages/datapicker/datapicker.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'buttons', component: ButtonsComponent},
  { path: 'datapicker', component: DatapickerComponent},
  { path: 'table', component: TableComponent},
  { path: 'select', component: SelectComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

