import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import md5 from "md5"
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Login = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: {errors}, setValue} = useForm();
    const customSubmit = (data) => {
    const passwordhash = md5(data.password)
    const userObject = {
        userName: data.userName,
        password: passwordhash
    }
    axios
            .post("https://instaya-backend-production-da29.up.railway.app/users/login", userObject)
            .then(response => {
                if (response.data.length != 0) {
                    setIsSuccess(true)
                    localStorage.setItem('user_id', response.data[0]._id)
                    navigate("/orders-home")
                } else {
                    alert('Datos ingresados invalidos. Por favor, intenta de nuevo')
                    setValue('password', '')
                }
            })
    }

    const showAlertSuccess=()=>{
    Swal.fire('Inicio correcto','','success')
    }

    useEffect(()=>{

        if(isSuccess===true){
            showAlertSuccess()
        } 

    }, [isSuccess])
    return (
        <div className="container">
        <div className="square square-lg bg-white border shadow-sm p-3 mb-5 bg-white rounded">
        <form className="card-body p-5 text-center" onSubmit={handleSubmit(customSubmit)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <div className="row-6">
                <label className="form-label" ></label>
                <input id="userName" placeholder ="Usuario" className="form-control"
                    {...register("userName", { required: true, maxLength: 100 })}
                    aria-invalid={errors.userName ? "true" : "false"} 
                />
                {errors.userName && <p className="color-error">Debe completar el campo</p>}
            </div >
            <div className="row-6 mt-1">
                <label className="form-label"></label>
                <input id="password" placeholder ="Contraseña" type="password" className="form-control"
                    {...register("password", { required: true, maxLength: 20 })} 
                    aria-invalid={errors.password ? "true" : "false"} 
                />
                {errors.password && <p className="color-error">Debe completar el campo</p>}
            </div>
            <div className="btn-login">
                <input value="Ingresar" id="btn-login" className="btn btn-primary" type="submit"></input>
            </div>
        </form>
        </div>
        </div>
    )
}

export default Login