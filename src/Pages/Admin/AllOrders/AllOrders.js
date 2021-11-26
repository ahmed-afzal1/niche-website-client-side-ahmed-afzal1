import React from 'react';
import { useToasts } from 'react-toast-notifications';
import { Button } from 'react-bootstrap';

const AllOrders = ({cart}) => {
    const { _id,item_price,item_img,name,item_bed,item_bath,item_space,status } = cart;
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

    const handleStatusOrder = (id,orderStatus) =>{

        if(orderStatus !== 'pending'){
            return false;
        }
        const result = window.confirm("Are You Sure to update?");
        const status = {status:'shipped'};
        if(result === true){
            const url = `https://serene-lake-64474.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(status)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        window.location.reload(false);
                        addToast('Data Updated Successfully', { appearance: 'success' });
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
            <td><Button className={status==='pending' ? "btn btn-danger":"btn btn-info"} onClick={()=>handleStatusOrder(_id,status)}>{status==='pending' ? 'Pending' : 'Approve'}</Button></td>
            <td> <Button className="btn btn-danger" onClick={()=>handleDeleteOrder(_id)}>Delete</Button> </td>
        </tr>
    );
};

export default AllOrders;