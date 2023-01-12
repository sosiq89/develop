import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

function Posts(companyLists:any){
    const navigate = useNavigate();
    let urlPath = '/purchase';

    const totalPosts = companyLists.companyLists.totalPosts;
    const offset = companyLists.companyLists.offset;

    type CompanyType = {
        companyId:number,
        name:string,
        cate:string,
        manager:string,
        location:string
    }

    const delCompany = (e:any) => {
        console.log(e.target.value);
        urlPath += '/delCompany';
        axios.delete(urlPath,
            {params : {companyId : e.target.value}})
            .then(r => {console.log(r)});
        window.location.replace("/purchase/companyList");
    }

    const editCompany = (e:any) => {
        console.log(e.target.value);
        const comId:number = e.target.value;
        const company = companyLists.companyLists.find((company:any) => company.companyId == comId);
        navigate('/purchase/companyEdit', {
            state :
                {
                    companyId : company.companyId,
                    name : company.name,
                    cate : company.cate,
                    location : company.location,
                    manager : company.manager
        }});
    }

    return (
        <tbody>
            {companyLists.companyLists.map(({companyId, name, cate, manager, location}:CompanyType, index:number) => (
                <tr key={companyId}>
                    <td style={{textAlign:"center"}}>
                        {totalPosts - (index + offset)}
                    </td>
                    <td>{name}</td>
                    <td>{cate}</td>
                    <td>{manager}</td>
                    <td>{location}</td>
                    <td style={{textAlign:"center"}}>
                        <button onClick={editCompany} value={companyId}>수정</button> &nbsp;&nbsp;
                        <button onClick={delCompany} value={companyId}>삭제</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default Posts;