import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './style/formUser.css'

const UsersForm = ({createNewUser,updateUserById,updateInfo,setUpdateInfo,setCloseForm}) => {
    const {register,reset,handleSubmit}=useForm()
    useEffect(() => {
     if(updateInfo){
        reset(updateInfo)
     }
    }, [updateInfo])
    
    const submit =(data)=>{
        if(updateInfo){
            updateUserById(data,updateInfo.id)
            setUpdateInfo()
        }else{
            createNewUser(data)
            reset({ email: '', password: '', first_name: '', last_name: '', birthday: '', }); 
        }
    }

    const cerrarLimpiar=()=>{
        setCloseForm(true)
        reset({ email: '', password: '', first_name: '', last_name: '', birthday: '', }); 
    }
    
    return (
        <form className='form ' onSubmit={handleSubmit(submit)}>
            <div onClick={cerrarLimpiar} className="form__x">X</div>
            <h2 className='form__title'>{updateInfo?'update User':'Create new User'}</h2>
            
            <div className="form__div">
                <label className='form__label' htmlFor="email">Email</label>
                <input className='form__input' type="email" id="email" {...register("email")}/>
            </div>
            <div className="form__div">
                <label className='form__label' htmlFor="password">Password</label>
                <input className='form__input' type="password" id="password" {...register("password")}/>
            </div>
            <div className="form__div">
                <label className='form__label' htmlFor="first_name">First Name</label>
                <input className='form__input' type="text" id="first_name" {...register("first_name")}/>
            </div>
            <div className="form__div">
                <label className='form__label' htmlFor="last_name">Last name</label>
                <input className='form__input' type="text" id="last_name" {...register("last_name")}/>
            </div>
            <div className="form__div">
                <label className='form__label' htmlFor="birthday">Birthday</label>
                <input className='form__input' type="date" id="birthday" {...register("birthday")}/>
            </div>
            <button onClick={()=>setCloseForm(true)} className='form__btn'>{updateInfo?"Update":"Create"}</button>
        </form>
    )
}

export default UsersForm