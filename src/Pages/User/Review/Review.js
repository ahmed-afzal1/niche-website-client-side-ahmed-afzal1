import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../contexts/useAuth';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import { useToasts } from 'react-toast-notifications';

import UserSiderbar from '../../Shared/UserSiderbar/UserSiderbar';
import axios from 'axios';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const { addToast } = useToasts();
    let history = useHistory();

    const onSubmit = data => {
        axios.post('https://serene-lake-64474.herokuapp.com/reviews',data)
        .then(res =>{
            if(res.data.insertedId){
                addToast('Saved Successfully', { appearance: 'success' });
                history.push('/')
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
                    <h2 className="mb-2">Add Review</h2>
                    <div className="add-product">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true })} placeholder="Name" defaultValue={user.displayName} readOnly/>
                            <input type="number" {...register("ratting",{ required: true, min: 1, max: 5 })} placeholder="Ratting between 0-5" />
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

export default Review;