import Layout from '../../components/layout/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
// import {toast } from 'react-toastify';
import toast from 'react-hot-toast';
import "../Styles/AuthStyle.css";



const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  

    const navigate = useNavigate();
  


    const handleSubmit = async (e) => {
        e.preventDefault()
        //     console.log(name,email,password,address,phone);
        //     toast.success('Register Sucessfuly');
        try {
            const res = await axios.post(`/api/v1/auth/Forgot-password`,
                {
                    email,
                    newPassword,
                    answer
                });

            if (res && res.data.succes) {
                toast.success(res.data.message);
             
                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error('something went wrong ');

        }
    };
  return (
    <Layout title ={'Forgot Password-Ecommerce APP'}>
        <div className='form-container'>
                {/* <h1> Register Page</h1> */}
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>RESET PASSWORD</h4>

                 

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Email</label> */}
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"

                            placeholder=" Enter Your Email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputName" className="form-label">Email</label> */}
                        <input type="email"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"

                            placeholder=" Enter Your Favorite Sport Name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
                        <input type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control" id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                   


                    <button type="submit" className="btn btn-primary">RESET </button>
                </form>
            </div>

    </Layout>
  )
}

export default ForgotPassword