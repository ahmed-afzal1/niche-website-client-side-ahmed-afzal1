import React from 'react';
import { Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';

const AllProducts = ({property}) => {
    const {name,price,location,bed,bath,space,img,_id} = property;
    const { addToast } = useToasts();

    const handleDeleteProduct = (id) =>{
        const result = window.confirm("Are You Sure to delete?");

        if(result === true){
            const url = `https://serene-lake-64474.herokuapp.com/products/${id}`;
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
            <td> <img src={img} alt="" className="cart-img"/> </td>
            <td>{name}</td>
            <td>{bed}</td>
            <td>{bath}</td>
            <td>{space}</td>
            <td>{location}</td>
            <td>${price}</td>
            <td> <Button className="btn btn-danger" onClick={()=>handleDeleteProduct(_id)}>Delete</Button> </td>
        </tr>
    );
};

export default AllProducts;