import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrdersRegister = () => {
const navigate = useNavigate();
const [isSuccess, setIsSuccess] = useState(false)
const { register, handleSubmit, formState: {errors}} = useForm();
const customSubmit = (data) => {
const orderObject = {
    pickupDirection: data.pickupDirection,
    pickupCity: data.pickupCity,
    receiverName: data.receiverName,
    receiverID: data.receiverID,
    deliveryAddress: data.deliveryAddress,
    deliveryCity: data.deliveryCity,
    length: data.length,
    width: data.width,
    height: data.height,
    weight: data.weight,
    pickupDate: data.pickupDate,
    pickupTime: data.pickupTime,
    status: data.status,
    checkType: data.checkType,
    userId: localStorage.getItem('user_id')
    
}
    setIsSuccess(true)
    axios
        .post("https://instaya-backend-production-da29.up.railway.app/orders/create", orderObject)
        .then(response => {
            if (response.status === '200') {
                alert('Success!')
            }
        })
    console.log('register data', data)
}
const showAlertSuccess=()=>{
Swal.fire('Orden creada','','success')
}

useEffect(()=>{

    if(isSuccess===true){
        showAlertSuccess()
    } 

}, [isSuccess])
return (
    <div className="container">
    <div className="square square-lg bg-white border shadow-sm p-3 mb-5 bg-white rounded">
    <form className="row g-3 mt-3" onSubmit={handleSubmit(customSubmit)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" fill="currentColor" className="bi bi-send-plus-fill" viewBox="0 0 16 16">
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z"/>
        </svg>
        <div className="col-6">
            <label className="form-label">Fecha de recogida</label>
            <input id="pickupDate" type="Date" className="form-control"
                {...register("pickupDate", { required: true, maxLength: 20 })}
                aria-invalid={errors.pickupDate ? "true" : "false"}  
            />
            {errors.pickupDate && <p className="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Hora de recogida</label>
            <input id="pickupTime" type="Time" className="form-control"
                {...register("pickupTime", { required: true, maxLength: 20 })}
                aria-invalid={errors.pickupTime ? "true" : "false"}  
            />
            {errors.pickupTime && <p className="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Direccion de recogida</label>
            <input id="pickupDirection" className="form-control"
                {...register("pickupDirection", { required: true, maxLength: 100 })}
                aria-invalid={errors.pickupDirection ? "true" : "false"} 
            />
            {errors.pickupDirection && <p className="color-error">Debe completar el campo</p>}
        </div >
        <div className="col-6">
            <label className="form-label">Ciudad de recogida</label>
            <input id="pickupCity" className="form-control"
                {...register("pickupCity", { required: true, maxLength: 20 })} 
                aria-invalid={errors.pickupCity ? "true" : "false"} 
            />
            {errors.pickupCity && <p className="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Nombre del destinatario</label>
            <input id="receiverName" className="form-control"
                {...register("receiverName", { required: true, maxLength: 100 })}
                aria-invalid={errors.receiverName ? "true" : "false"}  
            />
            {errors.receiverName && <p className="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Cedula/NIT del destinatario</label>
            <input id="receiverID" className="form-control"
                {...register("receiverID", { required: true, maxLength: 20 })}
                aria-invalid={errors.receiverID ? "true" : "false"}  
            />
            {errors.receiverID && <p className="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Direccion de entrega</label>
            <input id="deliveryAddress" className="form-control"
                {...register("deliveryAddress", { required: true, maxLength: 20 })}
                aria-invalid={errors.deliveryAddress ? "true" : "false"}  
            />
            {errors.deliveryAddress && <p className="color-error">Debe completar el campo</p>}
        </div>
        <div className="col-6">
            <label className="form-label">Ciudad de entrega</label>
            <input id="deliveryCity" className="form-control"
                {...register("deliveryCity", { required: true, maxLength: 20 })}
                aria-invalid={errors.deliveryCity ? "true" : "false"}  
            />
            {errors.deliveryCity && <p className="color-error">Debe completar el campo</p>}
        </div>

            <div className="col-3">
                <label className="form-label">Largo</label>
                <input id="length" className="form-control"
                    {...register("length", { required: true, maxLength: 20 })}
                    aria-invalid={errors.length ? "true" : "false"}  
                />
                {errors.length && <p className="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-3">
                <label className="form-label">Ancho</label>
                <input id="width" className="form-control"
                    {...register("width", { required: true, maxLength: 20 })}
                    aria-invalid={errors.width ? "true" : "false"}  
                />
                {errors.width && <p className="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-3">
                <label className="form-label">Alto</label>
                <input id="height" className="form-control"
                    {...register("height", { required: true, maxLength: 20 })}
                    aria-invalid={errors.height ? "true" : "false"}  
                />
                {errors.height && <p className="color-error">Debe completar el campo</p>}
            </div>
            <div className="col-3">
                <label className="form-label">Peso(KG)</label>
                <input id="weight" className="form-control"
                    {...register("weight", { required: true, maxLength: 20 })}
                    aria-invalid={errors.weight ? "true" : "false"}  
                />
                {errors.weight && <p className="color-error">Debe completar el campo</p>}
            </div>
        <div>
            <input id="status" type="hidden" value="Guardado"
             {...register("status",)}/>
        </div>
        <div className="col-12 mt-4">
        <div className="form-check">
        <input type="checkBox" id="checkType" className="form-check-input"
        {...register("checkType",)}
        />
        <label htmlFor = "checkType" className="form-check-label">Mercancia delicada</label>
        </div>
        </div>
        <div className='btn-register'>
        <input className="btn btn-primary" id="btn-create" value ="Crear" type="submit"/>
        </div>
    </form>
    </div>
 </div>
)
}

export default OrdersRegister