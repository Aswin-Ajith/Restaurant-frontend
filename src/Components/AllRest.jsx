import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import RestCard from './RestCard'
function AllRest() {

  //to hold array of data
  const [AllRestData, setAllRestData] = useState([])
  const base_url= 'https://restaurant-backend-cr12.onrender.com/restaurants'
  //api fetching
  const fetchData = async () => {
    const result = await axios.get(base_url)
    console.log(result);
    setAllRestData(result.data)
  }

  console.log(AllRestData);

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <Row>
        {
          AllRestData.map(item =>
            <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard restaurant={item} />
            </Col>
          )
        }
      </Row>
    </div>
  )
}

export default AllRest