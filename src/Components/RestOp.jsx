import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RestOp({ op }) {
    // const [restOp,setRestOp]= useState()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='op-btn py-1 px-3' variant="primary" onClick={handleShow}>
                Working Hours
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Working Hours</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3 fs-5'>
                    <p>Monday: {op?.Monday}</p>
                    <p>Tuesday: {op?.Tuesday}</p>
                    <p>Wednesday: {op?.Wednesday}</p>
                    <p>Thursday: {op?.Thursday}</p>
                    <p>Friday: {op?.Friday}</p>
                    <p>Saturday: {op?.Saturday}</p>
                    <p>Sunday: {op?.Sunday}</p>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RestOp
