import React, { useState } from "react";
import { useLocation } from "react-router";

const CompanyEdit = () => {
    const {state} = useLocation();
    const [name, setName] = useState();

    return (<div></div>);
}

export default CompanyEdit;