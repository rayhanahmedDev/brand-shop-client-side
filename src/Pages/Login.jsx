import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../Router/AuthProvider";

const Login = () => {

    const [loginError, setLoginError] = useState('')
    const [success, setSuccess] = useState('')

    const {googleLogin,signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleSignIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        setLoginError('')
        setSuccess('')

        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?. state? location.state : '/')
            setSuccess('You Are Login Successfully ')
            
        })
        .catch(error =>{
            console.error(error)
            setLoginError('Please Provide a Right Password')
        })
    }

     // google sign in
     const handleGoogle = ()=>{
        googleLogin()
        .then(result =>{
            navigate(location?. state? location.state : '/')
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div>
            <div className="hero my-16 pb-12">              
                    <div className="card bg-[#FF3300] flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <form onSubmit={handleSignIn}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your Email" className="input" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your Password" className="input" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-white">Login</button>
                            </div>
                            <div className="form-control mt-6">  
                         <button onClick={handleGoogle} className="btn w-full bg-white"> <FcGoogle className='text-[31px]'></FcGoogle> Login With Google</button>
                        </div>
                        <p className='text-center text-white'>Don’t have an account?<Link to='/register' className="font-bold text-white ml-2">Register</Link></p>
                        {
                            loginError && <p className="text-white text-center">{loginError}</p>
                        } 
                        {
                            success && <p className="text-white text-center">{success}</p>
                        }
                        </form> 
                                         
                </div>
            </div>
        </div>
    );
};

export default Login;