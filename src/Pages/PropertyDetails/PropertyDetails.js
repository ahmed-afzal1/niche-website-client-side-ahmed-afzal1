import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../contexts/useAuth';
import Header from '../Home/Header/Header';
import { useToasts } from 'react-toast-notifications';
import './PropertyDetails.css'
import axios from 'axios';


const PropertyDetails = () => {
    const {id} = useParams();
    const [apartment, setApartment] = useState([]);
    const { addToast } = useToasts();
    let history = useHistory();
    const { user } = useAuth();

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `https://serene-lake-64474.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setApartment(data));
    }, [])

    const onSubmit = data => {
        data['item_id'] = apartment._id;
        data['item_name'] = apartment.name;
        data['item_img'] = apartment.img;
        data['item_bed'] = apartment.bed;
        data['item_bath'] = apartment.bath;
        data['item_space'] = apartment.space;
        data['item_price'] = apartment.price;
        data['status'] = 'pending';
        
        axios.post('https://serene-lake-64474.herokuapp.com/orders',data)
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

            <div className="breadcrumb-area">
                <h2 className="mx-auto text-white"> Details of {apartment.name}</h2>
            </div>

            <div className="container tour-main-section">
                <div className="row">
                    <div className="col-lg-9 col-md-6 col-12">
                        <div className="tour-thumb">
                            <img src={apartment.img} alt="" className="img-thumbnail w-100"/>
                        </div>

                        <div className="tour-heading">
                            <h2>{apartment.name}</h2>
                        </div>

                        <div className="tour-content">
                            <h2>Overview</h2>
                            <p>
                                {
                                    apartment.description
                                }
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card booking-card">
                            <h3>Purchase This Apartment</h3>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mt-2">
                                    <div className="col-lg-12">
                                        <input {...register("name", { required: true })} placeholder="Your Full Name" className="form-control" defaultValue={user.displayName} readOnly/>
                                    </div>

                                    <div className="col-lg-12">
                                        <input {...register("email", { required: true })} placeholder="Your Email" className="form-control mt-2" defaultValue={user.email} readOnly/>
                                    </div>

                                    <div className="col-lg-12">
                                        <input {...register("address", { required: true })} placeholder="Your Address" className="form-control mt-2"/>
                                    </div>

                                    <div className="col-lg-12">
                                        <textarea {...register("message", { required: true })} placeholder="Your Message" className="form-control mt-2" rows="5"/>
                                    </div>
                                    
                                    <input type="submit" className="btn btn-dark" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PropertyDetails;