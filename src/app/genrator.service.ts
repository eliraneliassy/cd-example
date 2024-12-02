import { Injectable } from '@angular/core';
import {Employee} from './employee.interface';

@Injectable({
  providedIn: 'root'
})
export class GenratorService {

  name = ['Eliran', 'Tzach', 'Ofir', 'Chen', 'Omer', 'Uri', 'Benny'];

  generate(amount: number): Employee[] {
    const arr: Employee[] = [];
    let random;
    let employee: Employee;
    let name;

    for (let i = 0; i < amount; i++) {
      name = this.name[Math.floor(Math.random() * this.name.length)];
      random = this.generateNumber(10, 10);
      employee = { name: name, number: random };
      arr.push(employee);
    }

    return arr;

  }

  generateNumber(min: number, amount: number) {
    return Math.floor(Math.random() * amount) + min;
  }
}
