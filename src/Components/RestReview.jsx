import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react'

function RestReview({review}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='py-1 px-3' variant="primary" onClick={handleShow}>
          Reviews
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Reviews</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {review?.map(user=>
                <div>
                    <h5>{user.name}</h5>
                    <h6>Rating: {user.rating}</h6>
                    <p>{user.comments}</p>
                </div>)}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

export default RestReview