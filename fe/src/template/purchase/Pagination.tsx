import React, {SetStateAction, Dispatch} from "react";
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
                <Button onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}>
                    &lt;
                </Button>
                {Array(numPages)
                    .fill(undefined)
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            aria-current={currentPage === i + 1 ? true : false}>
                            {i + 1}
                        </Button>
                    ))}
                <Button onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === numPages}>
                    &gt;
                </Button>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 8px;
`;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    background: gray;
    color: white;
    font-size: 1rem;

    &:hover{
        background: #dee2e6;
        cursor: pointer;
        transform: translate(-2px);
    }

    &[disabled]{
        background: #adb5bd;
        cursor: revert;
        transform: revert;
    }

    &[aria-current]{
        background: deeppink;
        font-weight: bold;
        transform: revert;
    }

    &[aria-current]:hover{
        background: #dee2e6;
    }
`;

export default Pagination;