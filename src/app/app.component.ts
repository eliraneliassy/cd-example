import {Component, inject} from '@angular/core';
import {GenratorService} from './genrator.service';
import {Employee} from './employee.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  generator = inject(GenratorService);
  salesEmployees: Employee[] = this.generator.generate(1000);
  rndEmployees: Employee[] = this.generator.generate(1000);

  remove(list: Employee[], item: Employee): Employee[] {
    return list.splice(list.indexOf(item), 1);
  }

  add(list: Employee[], name: string): Employee[] {
    // list.unshift({ name: name, number: this.generator.generateNumber(10, 10) });
    return [{name, number: this.generator.generateNumber(10,10)}, ...list];
  }
}
