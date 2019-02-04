import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from '../expense'

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  @Input() expense: Expense;//Receives an expense from the expenses component. We use this to prepopulate the form
  @Output() didDelete = new EventEmitter<boolean>();//boolean indicating wether the user wants to delete the selected expense or not (expenses knows selected expense)
  @Output() editedExpense = new EventEmitter<Expense>();//An expense object that the user populated with the form. Will replace selected expense in the expense component
  @Output() state = new EventEmitter<number>();//When the user goes back, we update the state so that expenses knows to hide this form

  types = ["Fixed","Periodic","Variable"];//required to prepopulate the select box in the form

  constructor() { }

  ngOnInit() {
  }

  //Deletes an expense from the expenses. Expenses already knows which expense it sent over to us so we just have to tell it wether it should delete or not
  onDeleteExpense() {
    this.didDelete.emit(true);
  }

  //Edits an expense in expnses. The expenses component already knows the selected expense so this expense (info gathered from form) will replace said expense
  onEditExpense(amount: string, place:string, date: string, type: string) {
    var editedExpense: Expense = new Expense(amount, place, date, type);
    this.editedExpense.emit(editedExpense);
  }

  //If the user wants to go back, return a negative state because this will hide this form (see expense component html)
  onGoBack() {
    this.state.emit(-1);//this form is only shown when state is 1.
  }

}
