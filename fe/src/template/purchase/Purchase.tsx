import React from "react";
import { useNavigate } from "react-router";
import CompanyList from "./CompanuList";
import CompanyEdit from "./CompanyEdit";
import CompanyNew from "./CompanyNew";

import {Routes, Route} from "react-router-dom";
import Order from "./Order";
import './purchase.css';

const Purchase = () => {
    let navigate = useNavigate();

    let urlPath = (e:any) => {
        let urlPathName:string = '/purchase/';
        urlPathName += e.target.id;
        navigate(urlPathName);
    }

    return(
        <div id="purchaseContainer">
            <h3>구매관리 </h3>
            <div id="purchaseMenu">
                <div id="companyList" onClick={urlPath}>
                    <label className="purchaseLabel">업체 목록</label></div>
                <div id="companyNew" onClick={urlPath}>
                    <label className="purchaseLabel">업체 등록</label></div>
                <div id="order" onClick={urlPath}>
                <label className="purchaseLabel">발주 등록</label></div>
            </div>
            <div id="purchaseContent">
                <Routes>
                    <Route path="/" element={<CompanyList/>}></Route>
                    <Route path="/companyList" element={<CompanyList/>}></Route>
                    <Route path="/companyNew" element={<CompanyNew />}></Route>
                    <Route path="/companyEdit" element={<CompanyEdit />}></Route>
                    <Route path="/order" element={<Order />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Purchase;