import React from 'react'
import './style/usercardUsers.css'

const UsersList = ({user,deleteUserById,setUpdateInfo,setCloseForm}) => {
const deleteCardUser = () =>  deleteUserById(user.id)
const updateCardUser= () => {
  setCloseForm(false)
  setUpdateInfo(user)
  
}
  return (
    <article className='card'>
    <h3 className='card__title'>{user.name} {user.first_name} {user.last_name} </h3>
    <ul className=''>
        <li className='card__item'><span className='card__span'><i className="fa-solid fa-cake-candles"></i> birthday</span>{user.birthday}</li>
        <li className='card__item'><span className='card__span'> <i className="fa-solid fa-at"></i> Email</span>{user.email}</li>
    </ul>
    <footer className="card__footer">
        <button onClick={deleteCardUser}><i className="fa-solid fa-trash card__btn card__btn__trash"></i></button>
        <button onClick={updateCardUser}><i className="fa-regular fa-pen-to-square card__btn card__btn__edit"></i></button>
        </footer>
    </article>
  )
}

export default UsersList