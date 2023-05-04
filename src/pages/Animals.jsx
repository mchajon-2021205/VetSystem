import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Card } from '../components/Card'
import { Modal } from '../components/Modal'
import { AuthContext } from '../Index'

export const Animals = () => {

  const { dataUser } = useContext(AuthContext)
  const [animals, setAnimlas] = useState([{}])
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([])



  const headers = {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
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

  const getUsers = async () => {
    try {
      const { data } = await axios('http://localhost:3000/user/getUsers', { headers: headers });
      setUsers(data.getUsers);
      console.log(users);
    } catch (e) {
      console.log(e.response.data.message)
    }
  }


  useEffect(() => {
    llamada()
    getUsers()
  }, [])

  const addAnimal = async () => {
    try {
      setModal(true)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <main>

        {
          dataUser.role === 'ADMIN' ? (
            <>
              <button type="button" onClick={addAnimal} className="btn btn-primary">Agregar Animal</button>
              <Modal modal={modal} setModal={setModal} users={users} setAnimlas={setAnimlas} />
            </>
          ) : <></>
        }
        <div>
          <h1>Control animals</h1>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            animals.map(({ name, description }, i) => {
              return (
                <Card
                  key={i}
                  name={name}
                  description={description} />
              )
            })
          }
        </div>


      </main>
    </>
  )
}
