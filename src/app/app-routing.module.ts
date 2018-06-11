import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: {
      title: 'Home',
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'DashBoard',
    },
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: 'List',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
