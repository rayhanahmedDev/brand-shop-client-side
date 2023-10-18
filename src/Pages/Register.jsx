import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../Router/AuthProvider";

const Register = () => {
    
    const {googleLogin} = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password,name)
        setRegisterError('')
        setSuccess('')

        // error handling
        if(password.length < 6){
            setRegisterError('Password should be At Least 6 characters or longer')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one upperCase')
            return;
          }
          if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
            setRegisterError('Your password should have one Special Character')
            return;
          }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            setSuccess('Your Register Successfully')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }

    const handleGoogle = ()=>{
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <div className="hero mt-16 pb-8">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#FF3300]">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input " required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-white text-red-500">Register</button>
                        </div>
                        <div className="form-control mt-6">  
                         <button onClick={handleGoogle} className="btn w-full  bg-white text-red-500"> <FcGoogle className='text-[31px]'></FcGoogle> Register With Google</button>
                        </div>
                        <p className='text-center text-white'>Already have an account?<Link to='/login' className="font-bold ml-2">Login</Link></p>
                        {
                            registerError && <p className='text-center text-[#FF0000]'>{registerError}</p>
                        }
                        {
                            success && <p className='text-center text-[#CC009C]'>{success}</p>
                        }
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;