import { NgModule } from '@angular/core';
import { CutomerComponent } from './customer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CutomerAddComponent } from './add-customer/customer-add.component';
import { CutomerListComponent } from './list-customer/customer-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CutomerComponent],
  providers:[],
  declarations: [CutomerComponent, CutomerAddComponent, CutomerListComponent],
})
export class CustomerModule {}
