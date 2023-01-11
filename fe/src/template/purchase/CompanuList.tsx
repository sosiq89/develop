import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Pagination from "./Pagination";
import Posts from "./Posts";

const CompanuList = () => {
    const [companyLists, setLists] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5);
    const offset = (currentPage -  1) * pageSize;

    const urlPath = '/purchase/companyList';
    const [searchWord, setWord] = useState('');

    useEffect(() => {
        companySearch();
    }, []);

    const companySearch = () =>{
        const fetchLists = async () => {
            let res = await axios.get(urlPath,
                {params : {searchWord : searchWord}});
            setLists(res.data);
        }
        fetchLists().then(r => {});
    }

    const postsData = (posts:any) => {
        if(posts){
            let result = posts.slice(offset, offset + pageSize);
            result.totalPosts = posts.length;
            return result;
        }
    }

    return (
    <div id="listContainer">
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
            <Posts companyLists={postsData(companyLists)}  />
            <tfoot>
                <tr>
                    <td colSpan={6} style={{textAlign : "center"}}>
                        <Pagination currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalPosts={companyLists.length}
                                    pageSize={pageSize}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={6} style={{textAlign : "center"}}>
                    <button onClick={companySearch}>검색</button>
                    </td>
                </tr>
            </tfoot>
        </Table>
    </div>
    
    );
}

export default CompanuList;