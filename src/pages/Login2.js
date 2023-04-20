import React, { useEffect, useState, useContext } from 'react'
import './login2.css'
import network from '../images/network.jpg'
import blob from '../images/blob.svg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../src/context/authContext";


const Login2 = () => {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      })
    
      const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
      }

      const resetChange = (e) => {
        setInputs({
            username: "",
            password: "",
          });
      }
    
      const [err, setErr] = useState(null);
    
      const navigate = useNavigate()
    
      const { login, register } = useContext(AuthContext);
    
      const handleLogin = async (e) => {
        e.preventDefault()
        try {
          await login(inputs);
          navigate("/")
        } catch (err) {
          setErr(err.response.data)
        }
      };

      const handleRegister = async(e) => {
        e.preventDefault() //cannot register twice with same details
        try {
            await register(inputs);
            navigate("/");
        } catch (err) {
            setErr(err.response.data);
        }
      }

    const toggleForm = () => {
        const container = document.querySelector('.container');
        container.classList.toggle('active');
        resetChange();
    };

    //   useEffect(()=>{
    //     toggleForm();
    //   }, [])

    console.log(inputs)

    return (
        <div>
            <section>
                {/* s<img src={blob} alt="header" /> */}
                {/* <div className='logincontent'>
                    <h1 className="heading">CONNECT JAMIA</h1>
                    <h2 className="tagline">Bridging alumni with students</h2>
                    <p className='loginp'>
                        Ever wondered where the graduates of our university end up? Wanted to ask
                        them for advice? Well, sign in and let us begin.
                    </p>
                </div> */}
                <div className="container">
                    <div className="user signinBx">
                        <div className="imgBx"><img style={{ objectFit: 'cover' }} src={network} alt="illustration" /></div>
                        <div className="formBx">
                            <form action="" onsubmit="return false;">
                                <h2>Sign In</h2>
                                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                                <input type="submit" name="" value="Login" onClick={handleLogin} />
                                <p className="signup">
                                    Don't have an account ?
                                    <a href="#" onClick={toggleForm}>Sign Up.</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="user signupBx">
                        <div className="formBx">
                            <form action="" onsubmit="return false;">
                                <h2>Create an account</h2>
                                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                                <input type="email" name="email" placeholder="Email Address" onChange={handleChange}/>
                                <input type="password" name="password" placeholder="Create Password" onChange={handleChange}/>
                                <input type="submit" name="" value="Sign Up" onClick={handleRegister}/>
                                <p className="signup">
                                    Already have an account ?
                                    <a href="#" onClick={toggleForm}>Sign in.</a>
                                </p>
                            </form>
                        </div>
                        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login2