import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding : 6px 12px;
    border-radius: 8px;
    font-size : 1rem;
    line-height : 1.5;
    border : 1px solid lightgray;
    margin : 10px;
`

type props = {
    EditButton : () => void;
}

const EditButton = (props:props) => {
    
    return (
        <StyledButton onClick={props.EditButton}>수정</StyledButton>
    );
}

export default EditButton;