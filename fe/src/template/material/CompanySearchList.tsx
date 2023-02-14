import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CompanySearch from "./CompanySearch";

const CompanySearchList = ({ children }: { children?: React.ReactNode}) => {
    const [companyLists, setCompanyLists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5);
    const offset = (currentPage - 1);

    const urlPath = '/purchase/companyList';
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        companySearch();
    }, [])

    const companySearch = () => {
        const fetchLists = async () => {
            const res = await axios.get(urlPath,
                {params : {searchWord : searchWord}});
            setCompanyLists(res.data);
        }
    }

    const postsData = (posts:any) => {
        
    }

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>업체 이름</th>
                        <th>카테고리</th>
                        <th>담당자</th>
                        <th>지역</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tfoot>
                <tr>
                    <td colSpan={6} style={{textAlign : "center"}}>
                        <button >검색</button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
}

export default CompanySearchList;