import React, { useState, useContext } from 'react'
import imagen from '../assets/react.png'
import './style.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { AuthContext } from '../Index'//Importacion del context

export const LoginPage = () => {

  //Extraer los valores
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const [userLogged, setUserLogge] = useState(false);
  const [log, setLog] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setLog({
      ...log,
      [e.target.name]: e.target.value
    })
  }


  const login = async (e) => {
    try {
      const { data } = await axios.post('http://localhost:3000/user/login', log);
      console.log(data)
      localStorage.setItem('TOKEN', data.token)//Ingresar e; token
      if (data.message) {
        alert(data.message)
        setLoggedIn(true)//True para que se loggee
        console.log(loggedIn);
        navigate('/dashboard')
      }

    } catch (err) {
      alert(err.response.data.message)
      throw new Error('Error logeandose');
    }
  }



  return (

    <>

      {/* <Navbar></Navbar> */}
      <div className="cont">

        <div id='login' >
          <form id='form'>
            <label>User</label>
            <input onChange={handleChange} name='username' className='input' type="text" placeholder='user' />

            <label htmlFor="">Password</label>
            <input onChange={handleChange} name='password' className='input' type="password" placeholder='password' />

            <input onClick={(e) => login(e)} type="button" className='submit' value="Iniciar Secion" />
          
            <div className='botones'>
              <Link to='/register'>
                <button id='register'>Registrarse</button>
              </Link>
              <Link to='/'>
                <button id='register'>Volver</button>
              </Link>

            </div>
          </form>
        </div>
        {/* <div className='d'>
    ppsf
        </div> */}
      </div>
    </>

  )
}
