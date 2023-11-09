import React from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductDetails() {
    return (
        <div className='d-flex'>
            <div className="col-lg-4"></div>
            <div className='col-lg-4'>
                <h4 className='mt-2 text-center'> 11 Thur 2023 </h4>
                <h2 className='mt-3 ms-5'> Details </h2>
                <Card className='m-5' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title className='d-flex'>
                            <div>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    &#x20b9; 0
                                </Card.Text>
                            </div>
                            <div className='ms-auto d-flex'>
                                <i className="fa-solid fa-plus me-2"></i>
                                <Form.Group controlId="validationCustom02">
                                    <Form.Control type="text" style={{width:'15px',height:'25px'}}/>
                                </Form.Group>
                                <i className="fa-solid fa-minus ms-2 me-2"></i>
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className='d-flex align-items-center' style={{width: '915px',height: '68px',top: '744px',backgroundColor:'#718341'}}>
                    <h4 className='ms-2' style={{backgroundColor:'#718341',color:'#ffffff'}}> Total &#x20b9; 0 </h4>
                    <Button style={{borderRadius:'15px',width:'112px',color:'#718342',marginLeft:'280px'}} variant='light'><Link to={'/cart'} style={{textDecoration:'none',color:'#718342'}}> Place Order</Link> </Button>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
    )
}

export default ProductDetails