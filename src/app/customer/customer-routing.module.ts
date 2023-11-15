import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from 'src/app/customer/customer-list/customer-list.component';
import {CustomerCardComponent} from 'src/app/customer/customer-card/customer-card.component';
import {NewCustomerComponent} from 'src/app/customer/new-customer/new-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'info',
    component: CustomerCardComponent
  },
  {
    path: 'new',
    component: NewCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
