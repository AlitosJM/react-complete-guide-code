import {useRef, useState, useEffect} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputRef = useRef();

  useEffect(() => {
    if(enteredNameIsValid){
      console.log("Name is valid!")
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);    
  };

  const nameIpuntBlurHander = (event) => {
    setEnteredNameTouched(true);

    if(enteredName.trim() === ""){
      setEnteredNameIsValid(false);
      return;
    }

  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    
    setEnteredNameTouched(true);
    
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

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameIpuntClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameIpuntClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange={nameInputChangeHandler}
        onBlur={nameIpuntBlurHander}
        value={enteredName}/>
      </div>
      {nameInputIsInvalid && <p className="error-text"> Name must not be empty! </p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
