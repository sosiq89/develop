import React, { useState } from "react";
import EditButton from "../common/EditButton";

const OrderList = () => {
    const [count, setCount] = useState(0);
    const down = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }
    const up = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <EditButton EditButton={() => {
                console.log("EditButton");
            }}></EditButton> 
            <input type="button" value="-" onClick={down} />
            <input type="button" value="0" onClick={reset} />
            <input type="button" value="+" onClick={up} />
            <span>{count}</span>
        </div>
    );
}

export default OrderList;
