import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onResetForm, onInputChange} = useForm({
        username:'',
        email:'',
        password:''
    });

    const {username, email, password} = formState;

  return (
   <>
   <h1>Formulario con custom hooks</h1>
   <hr />

   <input 
    type="text"
    className="form-control"
    placeholder="Username" 
    name="username"
    value={username}
    onChange={onInputChange}
   />

   <input 
    type="email"
    className="form-control mt-2"
    placeholder="juanramon@gmail.com" 
    name="email"
    value={email}
     onChange={onInputChange}
   />

   <input 
    type="password"
    className="form-control mt-2"
    placeholder="contraseñas" 
    name="password"
    value={password}
    onChange={onInputChange}
   />

    {
        (username === 'jamon') && <Message />
    }

    <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
   </>
  )
}
