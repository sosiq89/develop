import React from "react";

function Posts(companyLists:any){
    const totalPosts = companyLists.companyLists.totalPosts;

    type CompanyType = {
        companyId:number,
        name:string,
        cate:string,
        manager:string,
        location:string
    }

    return (
        <tbody>
            {companyLists.companyLists.map(({companyId, name, cate, manager, location}:CompanyType, index:number) => (
                <tr key={companyId}>
                    <td style={{textAlign:"center"}}>
                        {totalPosts - (index)}
                    </td>
                    <td>{name}</td>
                    <td>{cate}</td>
                    <td>{manager}</td>
                    <td>{location}</td>
                    <td style={{textAlign:"center"}}>
                        <button value={companyId}>수정</button> &nbsp;&nbsp;
                        <button value={companyId}>삭제</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default Posts;