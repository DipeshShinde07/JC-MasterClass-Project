import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ICustomer } from '../../model/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-cutomer-add',
  templateUrl: './customer-add.component.html',
  // providers:[CustomerService]
})
export class CutomerAddComponent {
  FirstName: string = '';
  LastName: string = '';
  constructor(private customer:CustomerService) {
    console.log('counter',this.customer.counter)
    this.customer.Increment()
    console.log('counter',this.customer.counter)
  }
  @Output() onSubmitClick = new EventEmitter<ICustomer>();
  @Output() onCancelClick = new EventEmitter<void>();

  onSubmit() {
    this.onSubmitClick.emit({ Fname: this.FirstName, Lname: this.LastName });
    this.Reset();
  }

  Cancel() {
    this.Reset();
    this.onCancelClick.emit();
  }
  
  Reset() {
    this.FirstName = '';
    this.LastName = '';
  }
}
