import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setcredentials] = useState({name:"", email: "", password: "", cpassword:"" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const url = "https://inotebook-backend-v7s4.onrender.com/api/auth/createuser"
        // const url = "http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password}),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // settoken 
            localStorage.setItem('token', json.authtoken);
            navigate('/login')
        }
        else {
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container signup-page'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label forhtml="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label forhtml="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label forhtml="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label forhtml="cpassword" className="form-label">Confirm Password</label>
                    <input type="cpassword" className="form-control" id="password" name='password' onChange={onChange} minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
            </form>
        </div>
    )
}

export default Signup