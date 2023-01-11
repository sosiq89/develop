import React, {SetStateAction, Dispatch} from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";

type paginType = {
    currentPage:number,
    setCurrentPage:Dispatch<SetStateAction<number>>,
    totalPosts:number,
    pageSize:number
}

const Pagination = ({currentPage, setCurrentPage, totalPosts, pageSize}:paginType) => {
    const numPages = Math.ceil(totalPosts/pageSize);

    return (
        <>
            <Nav>
                
            </Nav>
        </>
    );
}

export default Pagination;