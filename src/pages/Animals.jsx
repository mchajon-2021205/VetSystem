import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../components/Card'

export const Animals = () => {

  const [animals, setAnimlas] = useState([{}])
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
  
  
  const llamada = async () => {
    try {
      const { data } = await axios('http://localhost:3000/animal/gett', {headers: headers});
      
      if(data.animals){
        setAnimlas(data.animals)
        console.log(data.animals)
      }
      
     
    } catch (e) {
      alert(err.response.data.message)
      throw new Error(e.response.message ||'Error gettinf animals')
    }
  }

  useEffect(()=>{
    llamada()
  },[])
  return (
    <>
      <main>
        <div>
          <h1>Control animals</h1>
        </div>
          
          <div style={{display: 'flex'}}>
          {
            animals.map(({name,description},i)=>{
              return(
                <Card 
                key={i}
                name={name}
                description={description}/>
              )
            })
          }
          </div>
          
          
      </main>
    </>
  )
}
