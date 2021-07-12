import {useState, useEffect} from 'react';

const useCounter = (forwards=true) => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        
        const flag = forwards ? (
            console.log("+counter"),
            setCounter((prevCounter) => {return (prevCounter + 1)})
            ):(
            console.log("-counter"),    
            setCounter((prevCounter) => prevCounter - 1)
            );
      }, 1000);
      
      console.log("-> before returning point")
      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;