import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Expense} from '../expense';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css'],
})
export class NewExpenseComponent implements OnInit {
  @Output() expense = new EventEmitter<Expense>();
  @Output() state = new EventEmitter<number>();
  
  types = ["Fixed","Periodic","Variable"];

  model = {amount: 40, place: "Petro Canada", date: "2019-01-31", type: this.types[1]};

  constructor() { }

  ngOnInit() {
  }

  //Returns a new expense created by the form to the expenses component. There it will add a new expense to the list.
  onSubmit(amount: string, place:string, date: string, type: string) {
    this.expense.emit(new Expense(amount,place,date,type));
  }

  //The expenses component will only display this form if it is state 1. Therefore we return a 0 to that component so they can update the state accordingly
  onGoBack() {
    this.state.emit(0);
  }
}
