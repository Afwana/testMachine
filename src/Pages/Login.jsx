import React, { useState } from 'react'
import Welcome from '../Assets/welcome.png' 
import { Form, Button } from 'react-bootstrap'
import Layer1 from '../Assets/Layer 24 1.png'
import Layer2 from '../Assets/Layer 24 2.png'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        email: "",password: ""
    })
    const handleLogin = async (e) => {
        e.preventDefault()
        const {email,password} = userData
        if(!email || !password){
            toast.warning("Please fill the form completely!!!")
        }
        else{
            // make api call
            // const res = await loginAPI(userData)
        }
        navigate('/products')
    }
  return (
    <>
       <div className='d-flex'>
           <div className='col-lg-3'></div>
           <div className='col-lg-6'>
                <img src={Welcome} alt="" style={{position:'relative'}} />
                <h1 style={{fontWeight:'100',position:'absolute',right:'40%',left: '40%',bottom:'70%'}} className='text-center'> Welcome </h1>
                <div className='w-50' style={{marginLeft:'25%'}}>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label className='mb-3'>Email Address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter Email"
                            className='mb-3'
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label className='mb-3'>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter Password"
                            className='mb-3'
                        />
                    </Form.Group>
                    <Button className='w-50' style={{borderRadius:'15px',backgroundColor:'#718341',border:'none',marginLeft:'20%'}} onClick={handleLogin} >Login</Button>{' '}
                </div>
                <div className='d-flex'>
                    <img src={Layer1} alt="" />
                    <img src={Layer2} alt="" />
                </div>
               
            </div> 
            <div className='col-lg-3'></div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
       </div>
    </>
  )
}

export default Login