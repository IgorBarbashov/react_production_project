import { useState } from "react";
import classes from './Counter.modules.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>Increase</button>
        </div>
    );
};