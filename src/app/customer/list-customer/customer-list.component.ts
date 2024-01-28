import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ICustomer } from '../../model/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cutomer-list',
  templateUrl: './customer-list.component.html',
  providers:[CustomerService]
})
export class CutomerListComponent {
  @Input() CustomerList: ICustomer[] = [];
  @Output() onAddClick = new EventEmitter<void>();

  constructor(private customer:CustomerService) {
    console.log('counter',this.customer.counter)
    this.customer.Increment()
    console.log('counter',this.customer.counter)
  }
  Add() {
    this.onAddClick.emit();
  }
}
