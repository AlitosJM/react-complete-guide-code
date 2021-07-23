import { Component} from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';

import { INCREMENT } from '../store';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  
  const incrementHandler = () => {
    dispatch(counterActions.increment());
    // dispatch({type: INCREMENT});
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    // dispatch({type: "increase", amount: 5});
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    // dispatch({type: "decrement"});
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    dispatch({type: "toggle"});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   toggleCounterHandler = () => {};

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>+</button>
//           <button onClick={this.decrementHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );

//   }

// }

// const mapStateToProps = state => {
//   return{
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type: "increment"}),
//     decrement: () => dispatch({type: "decrement"})
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);