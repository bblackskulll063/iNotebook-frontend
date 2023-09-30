import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        const url = "https://inotebook-backend-v7s4.onrender.com/api/auth/createuser"
        // const url = "http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
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
            <div className="row">
                <div className="col col-lg-6 col-sm-12 picture-section" >
                    <img src="draw1.jpg" />
                </div>

                <div className="col col-lg-6 col-sm-12 detail-section" >
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} placeholder="Username" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" id="password" name='password' onChange={onChange} placeholder="Password" minLength={5} required />
                        </div>
                        <div className="mb-3">
                            <input type="cpassword" className="form-control" id="password" name='password' onChange={onChange} placeholder="Confirm Password" minLength={5} required />
                        </div>

                        <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup