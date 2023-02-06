import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import {MaterialVO} from "../common/commonVO"

const MaterialNeo = () => {
    const [name, setName] = useState('');
    const [EA, setEA] = useState('');
    const [standard, setStan] = useState('');
    const [company, setCompany] = useState('');
    const [cate, setCate] = useState('');

    const materialVO : MaterialVO = {
        name : name,
        standard : standard,
        EA : EA,
        companyName : company,
        cate : cate
    }

    const materialPost = () => {
        console.log(materialVO);
        const urlPath = '/material/new';
        axios.post(urlPath, materialVO)
            .then(res => {console.log(res)});
    }

    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>자재 코드</td>
                    <td>
                        <input disabled />
                    </td>
                    <td>자재 이름</td>
                    <td>
                        <input onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </td>
                </tr>
                <tr>
                    <td>규격</td>
                    <td>
                        <input onChange={(e) => {
                            setStan(e.target.value);
                        }} />
                    </td>
                    <td>단위</td>
                    <td>
                        <input onChange={(e) => {
                            
                            setEA(e.target.value);
                        }} />
                    </td>
                </tr>
                <tr>
                    <td>납품 업체</td>
                    <td>
                        <input onChange={(e) => {
                            setCompany(e.target.value);
                        }} />
                    </td>
                    <td>카테고리</td>
                    <td>
                        <input onChange={(e) => {
                            setCate(e.target.value);
                        }} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={4} style={{textAlign : "center"}}>
                        <button onClick={materialPost}>저장</button>
                        &nbsp;&nbsp;&nbsp;
                        <button>취소</button>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default MaterialNeo