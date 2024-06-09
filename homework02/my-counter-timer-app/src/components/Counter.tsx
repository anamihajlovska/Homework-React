import { useState } from "react"
import "./Counter.css"

function Counter(){
    const [counter, setCounter] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("")


    const handleChange = (value: string) => {
        setInputValue(value);
        setErrorMessage("");
    }

    const handleIncrement = () => {
        const parsedValue = parseInt(inputValue);
        if (inputValue === "") {
          setCounter(counter + 1);
        } else if (isNaN(parsedValue)) {
          setErrorMessage("The input is not a number, please change it.");
        } else {
          setCounter(counter + parsedValue);
        }
      };

      const handleDecrement = () => {
        const parsedValue = parseInt(inputValue);
        if (inputValue === "") {
          setCounter(counter - 1);
        } else if (isNaN(parsedValue)) {
          setErrorMessage("The input is not a number, please change it.");
        } else {
          setCounter(counter - parsedValue);
        }
      };


      const disabledButton = parseInt(inputValue) < 0;

    return(
        
        <div className="counter">
            <h1>COUNTER</h1>
            <input type="text" placeholder="Add number" className="input" value={inputValue}  onChange={(event) => handleChange(event.target.value)}
            />
            <button onClick={handleIncrement} className="btn" disabled={disabledButton}>Increment</button>
            <button onClick={handleDecrement} className="btn" disabled={disabledButton}>Decrement</button>
            {errorMessage && <div style={{backgroundColor: "red"}}>{errorMessage}</div>}
            <div>Counter: {counter}</div>
        </div>
    )
}

export default Counter;

