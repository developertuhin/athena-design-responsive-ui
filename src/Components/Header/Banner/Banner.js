import React from 'react';
import bannerImage from '../../../images/banner1.png';

const Banner = () => {
    return (
        <div className="banner container py-lg-5 py-0">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="mt-5">Florence agency</h1>
                    <p className="my-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#" className="btn">See Pricing</a>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={bannerImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;