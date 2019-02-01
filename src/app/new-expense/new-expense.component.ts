import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Expense} from '../expense';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  @Output() expense = new EventEmitter<Expense>();
  @Output() state = new EventEmitter<number>();
  
  amount = 40.00;

  date = "2019-01-31";

  types = ["Fixed","Periodic","Variable"];

  place = "Petro Canada";

  model = {amount: this.amount, place: this.place, date: this.date, type: this.types[1]};

  submitted = false;

  onSubmit(amount: string, place:string, date: string, type: string) {
    this.expense.emit(new Expense(amount,place,date,type));
  }

  onGoBack() {
    this.state.emit(0);
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
