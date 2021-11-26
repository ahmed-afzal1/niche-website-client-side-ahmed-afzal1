import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import UserSiderbar from '../../Shared/UserSiderbar/UserSiderbar';
import { useHistory } from 'react-router';
import { useToasts } from 'react-toast-notifications';
import './Product.css'
import useAuth from '../../../contexts/useAuth';

const Product = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const { addToast } = useToasts();
    let history = useHistory();

    const onSubmit = data => {
        axios.post('https://serene-lake-64474.herokuapp.com/products',data)
        .then(res =>{
            if(res.data.insertedId){
                addToast('Saved Successfully', { appearance: 'success' });
                history.push('/explore')
            }
        })
    };
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <UserSiderbar></UserSiderbar>
                    </div>

                    <div className="col-md-8">
                        <h2 className="mb-2">Add New Property</h2>
                        <div className="add-product">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name", { required: true })} placeholder="Name"/>
                                <input {...register("location")} placeholder="Location"/>
                                <input type="number" {...register("bed")} placeholder="Bed Nubmer"/>
                                <input type="number" {...register("bath")} placeholder="Bath Nubmer"/>
                                <input type="number" {...register("space")} placeholder="Space In Square"/>
                                <input type="number" {...register("price")} placeholder="Price" />
                                <input {...register("img")} placeholder="Image Url"/>
                                <textarea {...register("description")} placeholder="Short Description" rows="7"/>

                                <input type="submit" className="btn btn-dark" />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Product;