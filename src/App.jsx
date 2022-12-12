import { useState, useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import useCrudUsers from './hooks/useCrudUsers'

function App() {
  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)
  const { users, getAllUsers, createNewUser, deleteUserById, updateUserById } = useCrudUsers()

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <div className="App__header">
      <h1 className='title'>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>

      </div>
      <div className={`form-container ${closeForm && `close__form`}`}>
        <UsersForm createNewUser={createNewUser} updateUserById={updateUserById} updateInfo={updateInfo} setUpdateInfo={setUpdateInfo} setCloseForm={setCloseForm} />

      </div>
      <div className="user-container">
        {
          users?.map(user => (
            <UsersList key={user.id} user={user} deleteUserById={deleteUserById} setUpdateInfo={setUpdateInfo} setCloseForm={setCloseForm} />
          ))
        }
      </div>
      {

      }
    </div>
  )
}

export default App
