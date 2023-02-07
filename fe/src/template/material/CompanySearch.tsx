import React, { SetStateAction, Dispatch } from "react";
import { CompanyVO } from "../common/commonVO";
import Modal from 'react-bootstrap/Modal';

interface CompanySearch {
    setCompanyVO : Dispatch<SetStateAction<CompanyVO|undefined>>
}

const CompanySearch = (props:CompanySearch) => {
    return (
        <div>
            <Modal show={modalFlag}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Company Search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CompanySearch setCompanyVO={setCompanyVO} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{setModalFlage(false)}}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    )
}

export default CompanySearch;