import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, img, description} = service;
  return (
    <div className='col-12 col-sm-6 col-md-4 g-4' style={{    backgroundColor:"#fff",
    bordeRadius: "2px",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)",
    transition: "box-shadow .25s"}}>
      <div className="text-center pb-2">
        <img width='100%' height='242px' src={img} alt="service" />
        <h3 className='my-4'>{name}</h3>
        <p><small>{description}</small></p>
        <Link to='/checkout'>
          <button className='btn btn-primary btn-sm w-100'>Booking Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;