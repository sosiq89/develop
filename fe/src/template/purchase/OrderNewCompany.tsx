import React from "react";

const OrderNewCompany = () => {

    const companySearch = () => {
        console.log("companySearch");
    }

    return (
        <>
            <input onClick={() => {companySearch()}} value={"회사 이름 조회"} />
        </>
    );
}

export default OrderNewCompany;