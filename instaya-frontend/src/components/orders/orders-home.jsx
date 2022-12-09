import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const Labels = [
    'Codigo de seguimiento',
    'Fecha de recogida',
    'Ciudad de entrega',
    'Direccion de entrega',
    'Estado',
    'Acción'
]

const OrdersHome = () => {
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        const userId = localStorage.getItem('user_id')
        axios
            .get("https://instaya-backend-production-da29.up.railway.app/orders?userId=" + userId)
            .then((response) => {
                console.log(response.data)
                setOrders(response.data)
            })

    },[])

    return (
        <div className="square-lg bg-white border mt-5 shadow-sm p-3 mb-5 bg-white rounded">
          <table className="table">
            <thead>
                 <tr>
                  {Labels.map((labels,index) => {
                  return (
                  <th scope="col" key={index}>{labels}</th>
                )
              })}
               </tr>
            </thead>
            {orders !== null ? orders.map((orders, index) => {
            return (
            <tbody key={index}>
                <tr>
                  <td>{orders._id}</td>
                  <td>{orders.pickupDate}</td>
                  <td>{orders.deliveryCity}</td>
                  <td>{orders.deliveryAddress}</td>
                  <td>{orders.status}</td>
                  <td><Link to={'/orders/' + orders._id + '/update'}><input value="Editar orden" id="btn-edit" className="btn btn-success" type="submit"></input></Link></td>
                </tr>
            </tbody>
            ) }): ''}
          </table>
          <div className="btn-order">
            <Link to="/orders-register"><input value="Crear orden" id="btn-create" className="btn btn-primary" type="submit"></input></Link>
          </div>
        </div>
    )
}

export default OrdersHome