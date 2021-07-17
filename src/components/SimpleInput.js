// import {useState} from 'react';
// import useInput from '../hooks/use-input';
import useInput from '../hooks/use-input-reducer';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  // const nameInputRef = useRef();
  
  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredAgeIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;


  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }
  

  // useEffect(() => {
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //     console.log("Data-form is valid!")
  //   }
  //   else{
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  // useEffect(() => {
  //   if(enteredNameIsValid){
  //     console.log("Name is valid!")
  //   }
  // }, [enteredNameIsValid]);

  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);    
  //   // if(event.target.value.trim() !== ""){
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const nameIpuntBlurHandler = (event) => {
  //   setEnteredNameTouched(true);

  //   // if(enteredName.trim() === ""){
  //   //   setEnteredNameIsValid(false);
  //   // }

  // };

  const formSubmissionHandler = event => {
    event.preventDefault();
    
    // setEnteredNameTouched(true);
    
    // if(!enteredName.trim()){
    //   console.log("empty");
    // }

    // if(enteredName.trim() === ""){
    //   setEnteredNameIsValid(false);
    //   return;
    // }

    if (!enteredNameIsValid){
      return;
    }
    
    // setEnteredNameIsValid(true);

    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ""; not ideal

    // setEnteredName(""); 
    // setEnteredNameTouched(false);

    resetNameInput();
    resetEmailInput();
  };


  const nameIpuntClasses = nameInputHasError 
  ? 'form-control invalid' 
  : 'form-control';

  const emailInputClasses = emailInputHasError
  ? 'form-control invalid'
  : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameIpuntClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        // ref={nameInputRef} 
        type='text' 
        id='name' 
        // onChange={nameInputChangeHandler}
        onChange={nameChangedHandler}
        // onBlur={nameIpuntBlurHandler}
        onBlur={nameBlurHandler}
        value={enteredName}/>
      </div>
      {/* nameInputIsInvalid */}
      {nameInputHasError && <p className="error-text"> Name must not be empty! </p>}
      
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
