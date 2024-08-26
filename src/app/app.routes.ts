import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'list', component: ListComponent },
];
