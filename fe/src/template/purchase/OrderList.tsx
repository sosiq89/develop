import React from "react";
import EditButton from "../common/EditButton";


const OrderList = () => {

    return (
        <div>
            <EditButton EditButton={() => {
                console.log("EditButton");
            }}></EditButton>
        </div>
    );
}

export default OrderList;