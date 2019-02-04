import { Component, OnInit} from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService} from '../expense.service'

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[];//List of expense
  state = 0;//Certain components are only visible under certain states
  hoverIndex:number = -1;//an index that continously tracks which row if any in the expense list is being hovered over
  selectedExpense: Expense;//if user is hovering over an expense and clicks it, we need to keep a reference to it to send over to an editable form
  selectedExpenseIndex: number;//if user is hovering over an expense and clicks it, we need to keep track of a reference to the index for editing/deleting purposes

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.getExpenses();
  }

  /*
   The following two functions pertain to having the pencil icon hover effect on the expenses list. When user hovers mouse over a row, a pencil icon appears.
   The user may click this icon to edit the expense. The way it works is the mouseEnterRow function is called and given the index of the row. We then assign
   That index to hoverIndex so that the app can always know which row is being hovered over.
  */
  mouseEnterRow(rowIndex) {
    this.hoverIndex = rowIndex;
  }

  //*see comment about mouseEnterrow* - As soon as the mouse leaves the row it puts the hoverIndex to -1 so the pencil icon will not appear next to any row.
  mouseLeaveRow(){
    this.hoverIndex = -1;
  }

  //Uses Expense Service to popluate the expense list
  getExpenses():void {
    this.expenseService.getExpenses()
      .subscribe(expenses => this.expenses = expenses);
  }

  //Deletes an expense from the list. 
  deleteExpense(didDelete: boolean) {
    if(didDelete) {
      this.expenses.splice(this.selectedExpenseIndex,1);
    }
  }

  //Edits expense
  editExpense(expense: Expense) {
    this.expenses[this.selectedExpenseIndex] = expense;
  }

  //Adds expense to the list
  addExpense(expense: Expense) {
    this.expenses.push(expense);
  }

  //Triggers when user selects pencil icon. Receives an expense and the index number that expense is located at.
  onEditExpense(expense: Expense, index: number) {
    this.selectedExpense = expense; //Needed to prepopulate the edit expense form
    this.selectedExpenseIndex = index;//Index is needed so that if user in the future decides to edit or to delete, we know where in the list to do it.
    this.state = 2; //Sets state to 2 so that the edit expense component can become visible
  }

  //Triggeres when user selects new expense button.
  onNewExpense() {
    this.state = 1; //when the state is 1, the new expense form is visible to the user
  }

  //Sets state based on an input
  updateState(state: number) {
    this.state = state;
  }

  //Will implement in the future. Does nothing for now.
  onAnalyze() {
    this.state = -1;
  }
}
