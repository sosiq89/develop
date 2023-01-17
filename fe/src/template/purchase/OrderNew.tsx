import React, {useState} from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import OrderNewCompany from "./OrderNewCompany";

const OrderNew = () => {
    const [companyName, setCompanyName] = useState('');
    const [cate, setCate] = useState('');
    const [materialName, setMaterialName] = useState('');
    const [EA, setEA] = useState(0);


    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td colSpan={4}>자재 발주서를 등록해 주세요.</td>
                </tr>
                <tr>
                    <td>업체 이름</td>
                    <td>
                        <OrderNewCompany></OrderNewCompany>
                    </td>
                    <td>카테고리</td>
                    <td>
                        <input id="cate" onChange={(e) => {
                            setCate(e.target.value);
                        }} />
                    </td>
                </tr>
                <tr>
                    <td>자재명</td>
                    <td>
                        <input id="materialName" onChange={(e) => {
                            setMaterialName(e.target.value);
                        }}/>
                    </td>
                    <td>수량</td>
                    <td>
                        <input id="EA" onChange={(e) => {
                            setEA(parseInt(e.target.value, 10));
                        }} />
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}

export default OrderNew;