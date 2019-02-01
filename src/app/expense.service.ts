import { Injectable } from '@angular/core';
import { Expense} from './expense';
import { EXPENSES} from './mock-expenses';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  getExpenses(): Observable<Expense[]> {
    return of(EXPENSES);
  }

  /*
  addExpense (expense: Expense): Observable<Expense> {

  }
  */

  constructor() { }
}
