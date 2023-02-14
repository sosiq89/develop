import React, { SetStateAction, Dispatch, useEffect, useRef } from "react";
import { CompanyVO } from "../common/commonVO";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import CompanySearchList from './CompanySearchList';

interface CompanySearch {
    setCompanyVO : Dispatch<SetStateAction<CompanyVO|undefined>>,
    modalFlag : boolean,
    setModalFlag :  Dispatch<SetStateAction<boolean>>,
}

const CompanySearch = (props:CompanySearch) => {
    return (
        <Modal show={props.modalFlag}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Company Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CompanySearchList>
                    </CompanySearchList>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{props.setModalFlag(false)}}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}

export default CompanySearch;