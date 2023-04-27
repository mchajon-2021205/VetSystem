import React, { useState, useContext } from 'react'
import './DashboardStyle.css'
import { Animals } from '../Animals'
import { UserPage } from '../UserPage';
import { AppoinmentPage } from '../AppoinmentPage';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Index';
import { Outlet, Link } from 'react-router-dom';


export const DashboardPaage = () => {

    const { setLoggedIn, dataUser } = useContext(AuthContext);//Destructurar
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);

    const [showUser, setShowUser] = useState(false);
    const [showAppointment, setShowAppointment] = useState(false)
    const [showAnimal, setShowAnimal] = useState(false);


    const cambio = (props) => {
        setShowUser(false);
        setShowAppointment(false);
        setShowAnimal(false);
        console.log(showAnimal)

        props == 'animals' ? setShowAnimal(true)
            : props == 'user' ? setShowUser(true)
                : setShowAppointment(true)
    }

    const logOut = () => {
        localStorage.clear();//Limpiar todo el localStorag
        //localStorage.removeItem('TOKEN')//Eliminar solo un dato
        setLoggedIn(false)
        navigate('/')
    }


    return (
        <>
            <div id='body'>
                <section id='sidebar'  >
                    <a className="brand">
                        <span className='text mt-2'>Adoption System</span>
                    </a>
                    <ul className='side-menu top'>
                        <li className='active'>
                            <button>
                                <span className='text'>Control Panel</span>
                            </button>
                        </li>
                        <li>
                            <Link to='animals'>

                                <button /* onClick={()=>{
                                        cambio('animals')
                                }} */>
                                    <span className='text' >Animals</span>
                                </button>
                            </Link>
                        </li>
                        {
                            dataUser.role == 'ADMIN' ? (
                                <li>

                                    <Link to='users'>{/* El slash significa que va a cambiar de pagina, si no se pone quiere decir que la pagina inserta en la pagina */}

                                        <button /* onClick={()=>{
                                                cambio('user')
                                                }} */>
                                            <span className='text'>USERS</span>
                                        </button>
                                    </Link>
                                </li>
                            ) : <></>
                        }
                        <li>
                        </li>
                        <li>
                            <Link to='appointments'>

                                <button /* onClick={()=>{ cambio()}} */>
                                    <span className='text'>APPOINTMENT</span>
                                </button>
                            </Link>
                        </li>
                        <li>
                            <button>
                                <span className='text'>SETTINGS</span>
                            </button>
                        </li>
                        <li>
                            <button>
                                <span>{dataUser.username}</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={logOut}>
                                <span className='text'>LOGOUT</span>
                            </button>
                        </li>
                    </ul>
                </section>
                <section id='content' style={{ background: 'white' }}>
                    <nav>
                        <a ></a>
                    </nav>
                    <Outlet></Outlet>
                    {
                        /*  isAdmin ? (
                             <main>
                                 <div className='head-title'>
                                     <div className="left">
                                         <h1 style={{color: 'black'}}>Control Administrador</h1>
                                     </div>
                                 </div>
                                 <ul className='box-info'>
                                     <div className='card '>
                                         <li className='m-3'>
                                             <span className="text" style={{color: 'white'}}>Users</span>
                                         </li>
                                         <li className='m-3'>
                                             <span className="text" style={{color: 'white'}}>Animals</span>
                                         </li>
                                         <li className='m-3'>
                                             <span className="text" style={{color: 'white'}}>Appointments</span>
                                         </li>
                                     </div>
                                 </ul>
                             </main>
                         ) : (
                             <div>
                                 {
                                     showAnimal ?(
                                         <>
                                             <main className='left binding '>
                                                 <Animals />
                                             </main>
                                         </>    
 
                                     ): showUser ?(
                                         <main>
                                             <UserPage />
                                         </main>
                                     ) : (
                                         <main >
                                             <AppoinmentPage />
                                         </main>
                                     )
                                 }
                             </div>
                         ) */
                    }
                </section>
            </div>
        </>
    )
}
