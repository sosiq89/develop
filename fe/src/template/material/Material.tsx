import React from "react";
import TopContainer from "../common/TopContainer";
import ContainerMenu from "../common/ContainerMenu";
import styled from "styled-components";
import ContainerContent from "../common/ContainerContent";
import { Route, Routes } from "react-router";
import MaterialNeo from "./MaterialNeo";

const Material = () => {
    return (
        <TopContainer> 
            <h3>자재관리</h3>
            <ContainerMenu>
                <MaterialList>
                    <MenuLabel>자재 목록</MenuLabel>
                </MaterialList>
                <MaterialNew>
                    <MenuLabel>자재 등록</MenuLabel>
                </MaterialNew>
                <MaterialManage>
                    <MenuLabel>자재 관리</MenuLabel>
                </MaterialManage>
            </ContainerMenu>
            <ContainerContent>
                <Routes>
                    <Route path="/" element={<MaterialNeo />}></Route>
                </Routes>
            </ContainerContent>
        </TopContainer>
    )
}

export default Material;

const MaterialList = styled.div`
    width: 33%;
    height: 100%;
    float: left;
    border: solid 1px #dee2e6;
    text-align: center;

    :hover{
        font-weight: bold;
        cursor: pointer;
    }
`;
const MaterialNew = styled.div`
    float: left;
    width: 34%;
    height: 100%;
    border-top: solid 1px #dee2e6;
    border-bottom: solid 1px #dee2e6;
    text-align: center;
    :hover{
        font-weight: bold;
        cursor: pointer;
    }
`;
const MaterialManage = styled.div`
    float: left;
    width : 33%;
    height : 100%;
    border: solid 1px #dee2e6;
    text-align: center;
    :hover{
        font-weight: bold;
        cursor: pointer;
    }
`;

const MenuLabel = styled.label`
    font-size: 20px;
    pointer-events: none;
`;