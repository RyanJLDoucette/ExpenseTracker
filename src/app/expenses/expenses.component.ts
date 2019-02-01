import { Component, OnInit} from '@angular/core';
import { Expense } from '../expense';
import { EXPENSES } from '../mock-expenses'
import { ExpenseService} from '../expense.service'

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];
  state = 0;
  hoverIndex:number = -1;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses();
  }

  enter(index) {
    this.hoverIndex = index;
  }

  leave(index){
    this.hoverIndex = -1;
  }

  /*
  @HostListener('mouseleave') onmouseleaver() {
    this.mouseOver = false;
  }
  */

  getExpenses():void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  updateState(state: number) {
    this.state = state;
  }

  onNewExpense() {
    this.state = 1;
  }

  onGraph() {
    this.state = 2;
  }
}
