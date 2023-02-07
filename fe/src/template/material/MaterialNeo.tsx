import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import {MaterialVO, CompanyVO} from "../common/commonVO"
import CompanySearch from "./CompanySearch";

const MaterialNeo = () => {
    const [name, setName] = useState('');
    const [ea, setEA] = useState('');
    const [standard, setStan] = useState('');
    const [companyVO, setCompanyVO] = useState<CompanyVO|undefined>();
    const [cate, setCate] = useState('');
    const [modalFlag, setModalFlage] = useState<boolean>(false);

    const materialVO : MaterialVO = {
        name : name,
        standard : standard,
        ea : ea,
        companyVO : companyVO,
        cate : cate
    }

    const materialPost = () => {
        console.log(materialVO);
        let urlPath = '/material/new';
        axios.post(urlPath, materialVO)
            .then(res => {console.log(res)});

            window.location.reload();
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
                        <input onClick={(e) => {
                            setModalFlage(true);
                        }} />
                        
                    </td>
                    <td>카테고리</td>
                    <td>
                        <input onChange={(e) => {
                            setCate(e.target.value);
                        }} />
                        <CompanySearch ></CompanySearch>
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