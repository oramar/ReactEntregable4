import axios from 'axios'
import React, {  useState } from 'react'
import Swal from 'sweetalert2'
const useCrudUsers = () => {
 const [users, setUsers] = useState()

 //Obtener todos los datos con get
 const getAllUsers = ()=>{
    const URL = `https://users-crud.academlo.tech/users/`
    axios.get(URL)
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
 }

 //Registrar Usuarios 
 const createNewUser = (data)=>{
    const URL = `https://users-crud.academlo.tech/users/`
    axios.post(URL,data)
    .then(res=>{
        res.data
        Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'He User has been saved',
         showConfirmButton: false,
         timer: 1500
       })
        getAllUsers()
    })
    .catch(err=>{
      console.log(err)
      Swal.fire({
         icon: 'error',
         title: 'Oops...',        
         text:'all fields must be filled'        
       })
   })
    
 }

 //eliminar usuarios

 const deleteUserById = (id)=>{
    const URL = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(URL)
    .then(res=>{
        res.data
        Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'He User has been delete',
         showConfirmButton: false,
         timer: 1500
       })
        getAllUsers()
    })
    .catch(err=>console.log(err))
 }

 //Actualizar usuario

 const updateUserById = (data,id)=>{
    const URL = `https://users-crud.academlo.tech/users/${id}/`
    axios.patch(URL,data)
    .then(res=>{
        res.data
        Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'He User has been update',
         showConfirmButton: false,
         timer: 1500
       })
        getAllUsers()
    })
    .catch(err=>{
      Swal.fire({
         icon: 'error',
         title: 'Oops...',        
         text:'all fields must be filled'        
       })
      console.log(err)})
 }


 return {users,getAllUsers,createNewUser,deleteUserById, updateUserById}
}

export default useCrudUsers