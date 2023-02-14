import { stringify, StringifyOptions } from "querystring";
import React from "react";

export interface MaterialVO{
    materialId?  : number;
    name : string;
    standard : string;
    ea : string;
    companyVO : CompanyVO|undefined;
    cate : string;
}

export interface CompanyVO{
    companyId? : number;
    name : string;
    cate : string;
    manager : string;
    location : string;
}

export interface Posts{

}

const commonVO = () => {
    
}

export default commonVO;