import axios from 'axios';
import React, { useState } from 'react'
import './style.css'
import { Navbar } from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'


export const Register = () => {

    const navigate = useNavigate();
    //componente no controlado
    //document.getElementById('');

    //Componente controlado, va con un nombre
    //Componentes controlados, cuando se manejan multiples datos, por ejemplo unos 5, 8 inputs
    const [form, setForm] = useState({
        name: '',
        surname: '',
        username: '',
        password: '',
        email: '',
        phone: ''
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value //Identifica a quien esta haciendo referencia
        })
    }

    const register = async (e) => {
        try {
            e.preventDefault();
            const { data } = await axios.post('http://localhost:3000/user/register', form);
            if (data.message) {
                console.log(data);
                alert(data.message)
                navigate('/login')
            }
        } catch (e) {
            console.error(e)
            alert(e.response.data.message)
            throw new Error('Error registrando usuario')
        }

    }

    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className='cont' >
                <div className='register'>
                    <h3 className='text-center'> Sing Up</h3>
                    <form className='for' action="">
                        <div className=''>
                            <label className='from-label' htmlFor="">Name</label>
                            <input onChange={handleChange} name='name' className='in' type="text" />{/* (event) => {}captura los cambios en el input*/}
                        </div>
                        <div className=''>
                            <label className='from-label' htmlFor="">Surname</label>
                            <input onChange={handleChange} name='surname' className='in' type="text" />
                        </div>
                        <div className=''>
                            <label className='from-label' htmlFor="">Username</label>
                            <input onChange={handleChange} name='username' className='in' type="text" />
                        </div>
                        <div className=''>
                            <label className='from-label' htmlFor="">Password</label>
                            <input onChange={handleChange} name='password' className='in' type="text" />
                        </div>
                        <div className=''>
                            <label className='from-label' htmlFor="">Email</label>
                            <input onChange={handleChange} name='email' className='in' type="text" />
                        </div>
                        <div className=''>
                            <label className='from-label' htmlFor="">Phone</label>
                            <input onChange={handleChange} name='phone' className='in' type="text" />
                        </div>
                        <div className='botones'>
                            <button onClick={(e) => register(e)} className='button btn btn-primary text-center'>
                                Registrarme
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
