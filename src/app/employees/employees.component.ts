import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from '../employee.interface';
import {fibonacci} from '../fibo';

@Component({
  selector: 'app-employees',
  standalone: false,
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {

  @Input() data: Employee[] = [];

  @Output() remove = new EventEmitter<Employee>();
  @Output() add = new EventEmitter<string>();
  label = '';
  @Input() department?: string;



  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    console.log('in fibonacci', this.department);
    return fibonacci(num);
  }


}
