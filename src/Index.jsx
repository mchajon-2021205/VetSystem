import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'//Sistema de enrrutamiento
import App from './App'
import { NotFound } from './pages/NotFound'
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage'
import { Animals } from './pages/Animals'
import { Register } from './pages/Register'
import { DashboardPaage } from './pages/DasboardPag/DashboardPaage'


export const AuthContext = createContext();  //Auntenticar si el user esta loggeado o no



//Nos servira para crar el enrutador y  pasarle un contexto al enrutador (Conjunto de Rutas)
//Context=> serie de datos o funciones que juntas son un contexto
export const Index = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    let token = localStorage.getItem('TOKEN');
    if(token) setLoggedIn(true)
  }, [])


const routes = createBrowserRouter ([
  {
    errorElement: <NotFound />,
    path: '/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/dashboard',
        element: loggedIn ? <DashboardPaage /> : <LoginPage />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

return(
 <AuthContext.Provider value={{loggedIn, setLoggedIn}}>{/* Proveedor de valores */}
   <RouterProvider router={routes}/>
 </AuthContext.Provider>
)

}
