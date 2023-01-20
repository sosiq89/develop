import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { fileURLToPath } from "url";
import { UrlButtonType, UrlButtonCreate } from "./ButtonType";

const StyledButton = styled.button`
    padding : 6px 12px;
    border-radius: 8px;
    font-size : 1rem;
    line-height : 1.5;
    border : 1px solid lightgray;
    margin : 10px;

    color : ${(props:UrlButtonCreate) => props.color || "gray"};
    background : ${(props:UrlButtonCreate) => props.background || "white"}
`

const UrlButton = ({subject, color, background, urlPath}:UrlButtonType) => {

    const navigate = useNavigate();
    
    const urlMove = () => {
        navigate(urlPath);
    }

    return (
        <StyledButton color={color} 
                        background={background}
                        onClick={urlMove}>
            {subject}
        </StyledButton>
    );
}

export default UrlButton;