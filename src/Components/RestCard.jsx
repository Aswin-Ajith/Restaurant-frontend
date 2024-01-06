import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './RestCard.css'

function RestCard({ restaurant }) {
    console.log(restaurant);
    return (
        <Link to={`view/${restaurant.id}`} style={{textDecoration:'none'}}>
            <MDBCard className='card m-4'>
                <MDBCardImage src={restaurant.photograph} position='top' alt='...' height={410} />
                <MDBCardBody>
                    <MDBCardTitle>{restaurant.name}</MDBCardTitle>
                    <MDBCardText className='fs-6'>
                        {restaurant.address}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </Link>
    )
}

export default RestCard