import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import './ViewRest.css'
import RestOp from './RestOp'
import RestReview from './RestReview'

function ViewRest() {

  const [restData, setRestData] = useState({})
  //useParams- used to get path parameter from the url
  // const paraId = useParams()
  // console.log(paraId.id);

  //destructure
  const { id } = useParams()
  console.log(id);



  //API call to get details of particular restaurant using the path parameter

  const base_url = 'https://restaurant-backend-cr12.onrender.com/restaurants'
  const fetchRest = async () => {
    const result = await axios.get(`${base_url}/${id}`)
    // console.log(result.data);
    setRestData(result.data)
  }

  useEffect(() => {
    fetchRest()
  }, [])


  console.log(restData);

  return (
    <div>
      <Row>
        <Col>
          <img src={restData.photograph} alt="" className='image' />
        </Col>
        <Col>
          <div className='details'>
            <h2>{restData.name}</h2>
            <h5 className='mt-4'>{restData.neighborhood}</h5>
            <p>{restData.address}</p>
            <p>Cuisine: {restData.cuisine_type}</p>
            <p><RestOp op= {restData.operating_hours}/></p>
            <p><RestReview review = {restData.reviews}/></p>
          </div>

        </Col>
      </Row>
    </div>
  )
}

export default ViewRest