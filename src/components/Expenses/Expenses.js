import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const expenseItemMap = (expense) => {
    return( 
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />);
  }
  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(expenseItemMap)}
      {/* {props.items.map( (expense) => ( // notice -> ()
              <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
      ))} */}

    </Card>
  );
}

export default Expenses;
