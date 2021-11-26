import React from 'react';
import { Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import './MyOrders.css'

const MyOrders = ({cart}) => {
    const { _id,item_price,item_img,name,item_bed,item_bath,item_space } = cart;
    const { addToast } = useToasts();

    const handleDeleteOrder = (id) =>{
        const result = window.confirm("Are You Sure to delete?");

        if(result === true){
            const url = `https://serene-lake-64474.herokuapp.com/orders/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount === 1){
                    window.location.reload(false);
                    addToast('Data Delete Successfully', { appearance: 'success' });
                }
            })
        }else{
            return false;
        }

    }

    return (
        <tr>
            <td> <img src={item_img} alt="" className="cart-img"/> </td>
            <td>{name}</td>
            <td>{item_bed}</td>
            <td>{item_bath}</td>
            <td>{item_space}</td>
            <td>${item_price}</td>
            <td> <Button className="btn btn-danger" onClick={()=>handleDeleteOrder(_id)}>Delete</Button> </td>
        </tr>
    );
};

export default MyOrders;