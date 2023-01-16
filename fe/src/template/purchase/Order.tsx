import React, { useState } from "react";
import styled from "styled-components";
import UrlButton from "../common/UrlButton";
import { Route, Routes } from "react-router";
import OrderNew from "./OrderNew";
import OrderList from "./OrderList";

interface PropsType{
    title:string;
}

export type TopicsArr = {
    id : number
    title : string
    body : string
}

const Order = (props:PropsType):JSX.Element => {
    const urlPath = window.location.href;
    const urlMove = () => {
        console.log("urlMove");
    }

    return (
        <div>
            <div>
                <UrlButton subject={"등록"}
                            color={'white'}
                            background={'gray'}
                            urlPath={urlPath + "/new"}/>
                <UrlButton subject={"관리"}
                            color={'white'}
                            background={'gray'}
                            urlPath={urlPath + "/list"}/>
            </div>
            <div>
                <Routes>
                    <Route path="/new" element={<OrderNew></OrderNew>}></Route>
                    <Route path="/list" element={<OrderList></OrderList>}></Route>
                </Routes>
            </div>
        </div>
    ) ;
}

export default Order;