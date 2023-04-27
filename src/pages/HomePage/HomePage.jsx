import React from 'react'
import './HomeStyle.css'
import perro from '../../assets/perro.jpg'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <div id='contenedor'>
        <div className='izquierda'>
          <div className='center'>
            <h2>Vet<span className='amarillo'>System</span></h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum consequuntur quo culpa possimus fugiat consequatur
              quod quae, fugit iusto autem ea, nisi placeat reprehenderit
              ipsa molestias numquam perspiciatis accusamus tempora!
            </p>
            <Link to='/login'>
              <button>Iniciar Secion</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="derecha">
      </div>

    </>
  )
}
