import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [credentials, setcredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const url = "http://localhost:5000/api/auth/login"
        const url = "https://inotebook-backend-v7s4.onrender.com/api/auth/login"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
            // settoken 
            localStorage.setItem('token', json.authtoken);
            navigate('/home')
        }
        else{
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container login-page'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label forhtml="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label forhtml="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} id="password" name='password' onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
            </form>
        </div>
    )
}

export default Login