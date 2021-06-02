import React, {useState} from 'react';
// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const items = props.items
  // let expensesContent = <p>No expenses found</p>;

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => {
      return (expense.date.getFullYear().toString() === filteredYear)

    }

  );

/*   const expenseItemMap = (expense) => {
    return( 
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
      );
  } */


  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map( (expense) => (
  //     <ExpenseItem
  //     key={expense.id}
  //     title={expense.title}
  //     amount={expense.amount}
  //     date={expense.date}
  //   />))

  // }
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>

      {/* {expensesContent} */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&  filteredExpenses.map( (expense) => (
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))        
      } */}

      {/* {filteredExpenses.length === 0 ? (<p>No expenses found</p>)
      :(
        filteredExpenses.map( (expense) => ( // notice -> ()
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))
        )
      } */}
      {/* {items.map(expenseItemMap)} */}

    </Card>
  );
}

export default Expenses;
