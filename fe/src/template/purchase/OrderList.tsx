import React, { useState } from "react";
import styled from "styled-components";



const Container = styled.div`
    border: 5px solid black;
    padding: 10px;
`;

const Red = styled(Container)<{backColor:string}>`
    background-color : ${props => props.backColor};
`;

const RedInput = (props:any) => {
    return (
        <input type="button" value="fire"
        onClick={(e) => {
            props.setBackColor("red");
        }}></input>
    );
}

const OrderList = () => {
    const [backColor, setBackColor] = useState('white');

    return (
        <div id="red">
            <Red backColor={backColor}>
                <h1>red</h1>
                <RedInput setBackColor={setBackColor}></RedInput>    
            </Red>
        </div>
    );
}

export default OrderList;
