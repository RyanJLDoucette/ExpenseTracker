import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';
import { FormsModule }   from '@angular/forms';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    NewExpenseComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
