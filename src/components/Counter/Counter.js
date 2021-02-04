import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(0);

    const onIncrement = () => {
        setCounter(counter + 1);
    }

    const onIncrement100 = () => {
        setCounter(counter + 100);
    }

    const onDecrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1 < 0 ? 0 : counter -1) ;
        }
    }

    const onDecrement100 = () => {
        setCounter((counter - 100) < 0 ? 0 : counter - 100)
    }

    const onReset = () => {
        setCounter(0);
    }

    const onSubmitCounter = (ev) => {
        ev.preventDefault();
        setCounter(+ev.target[0].value + counter);
    }

    return(
        <div className='counter'>
            <div className="screen_counter">
                {counter}
            </div>
            <div className="btn_group">
                <button onClick={onIncrement}>Inc</button>
                <button onClick={onDecrement}>Dec</button>
                <button onClick={onReset}>Reset</button>
                <button onClick={onIncrement100}>+100</button>
                <button onClick={onDecrement100}>-100</button>
            </div>

            <form onSubmit={onSubmitCounter}>
                <input type="number"/>
                <button type='submit'>Enter</button>
            </form>

        </div>
    )
}

export default Counter
