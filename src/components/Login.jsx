import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
        if (json.success) {
            // settoken 
            localStorage.setItem('token', json.authtoken);
            navigate('/home')
        }
        else {
            alert("Invalid Credentials");
        }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container login-page">
            <div className="row">
                <div className="col col-lg-6 col-sm-12 picture-section" >
                    <img src="draw1.jpg" />
                </div>

                <div className="col col-lg-6 col-sm-12 detail-section" >
                    <form onSubmit={handleSubmit}>
                        <h1>Log In</h1>
                        <div class="box">
                            <input type="email" className="form-control" value={credentials.email} id="email" name="email" aria-describedby="emailHelp" onChange={onChange} placeholder="Email" />
                        </div>
                        <div class="box">
                            
                            <input type="password" className="form-control" value={credentials.password} id="password" name='password' onChange={onChange} placeholder="Password" />
                        </div>

                        <button className="btn btn-primary my-3" type="submit">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login