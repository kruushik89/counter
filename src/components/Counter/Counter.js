import React, {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(0);

    //todo подивись на це
    const onIncrement = (num) => {
        setCounter(counter + num);
    }

    const onIncrement100 = () => {
        setCounter(counter + 100);
    }

    const onDecrement = (num) => {
        // як намене ізбиточний иф
        // if (counter >= 1) {
        //     setCounter(counter - 1 < 0 ? 0 : counter -1) ;
        // }

            setCounter(counter + num < 0 ? 0 : counter + num) ;

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
                {/*//todo подивись на варікі як можно додати аргументи*/}
                <button onClick={onIncrement.bind(null,1)}>Inc</button>
                <button onClick={()=>onDecrement(-1)}>Dec</button>

                <button onClick={onReset}>Reset</button>
                <button onClick={onIncrement100}>+100</button>
                <button onClick={onDecrement100}>-100</button>
            </div>
            {/*todo зробити контрольований інпут позбавитись форми*/}
            <form onSubmit={onSubmitCounter}>
                <input type="number"/>
                <button type='submit'>Enter</button>
            </form>

        </div>
    )
}

export default Counter
