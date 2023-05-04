import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Modal = ({ modal, setModal, users,setAnimlas }) => {

    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }

     

      const animal = async (e) => {
        try {
            e.preventDefault()
            let animals = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value,
                age: document.getElementById('inputAge').value,
                type: document.getElementById('inputType').value,
                user: document.getElementById('inputUser').value
    
            }
            console.log(animals.user);
            
            const { data } = await axios.post('http://localhost:3000/animal/save',animals,{ headers: headers })
            console.log(data.message);
            cancelarModal()
            llamada()
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    
    const llamada = async () => {
        try {
          const { data } = await axios('http://localhost:3000/animal/get', { headers: headers });
          if (data.animals) {
            setAnimlas(data.animals)
            console.log(data.animals)
          }
    
        } catch (e) {
          console.log(e.response.data.message)
          throw new Error(e.response.message || 'Error gettinf animals')
        }
      }

   

    const cancelarModal = () => {
        setModal(false)
    }
    return (
        <>
            {
                modal ? (
                    <div className='fondo-modal'>

                        <div id='cont-modal'>
                            <form className="m-5 text-center">
                                <div className="mb-3">
                                    <label htmlFor="inputName" className="form-labler">Name</label>
                                    <input type="text" className="form-control" id="inputName" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputDescription" className="form-labler">Description</label>
                                    <input type="text" className="form-control" id="inputDescription" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputAge" className="form-labler">Age</label>
                                    <input type="number" className="form-control" id="inputAge" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputType" className="form-labler">Type</label>
                                    <input type="text" className="form-control" id="inputType" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputUser" className="form-labler">User</label>
                                    <select id="inputUser" className="form-control">
                                        {
                                             users.map(({_id, name}, i) =>{
                                                return(
                                                    <option key={i} value={_id}>{name}</option>
                                                )
                                            }) 
                                        }
                                    </select>
                                </div>

                                <button className="btn btn-success m-4" onClick={(e)=>{animal(e)}}> ADD </button>

                                <button className="btn btn-danger m-3" onClick={cancelarModal} >Cancel</button>


                            </form>
                        </div>
                    </div>
                ) : <></>
            }

        </>
    )
}
