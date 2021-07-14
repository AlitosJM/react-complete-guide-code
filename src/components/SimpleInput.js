import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputRef = useRef();

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);    
  };

  const formSubmissionHandler = event => {
    event.preventDefault(); 
    
    if(!enteredName.trim()){
      console.log("empty");
    }

    if(enteredName.trim() === ""){
      setEnteredNameIsValid(false);
      return;
    }
    
    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ""; not ideal

    setEnteredName(""); 
  };

  const nameIpuntClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameIpuntClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler}
        value={enteredName}/>
      </div>
      {!enteredNameIsValid && <p className="error-text"> Name must not be empty! </p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
