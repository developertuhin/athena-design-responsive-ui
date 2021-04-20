import React from 'react';
import bannerImage2 from '../../images/banner2.png';

const Contact = () => {
    return (
        <div id="contact" className="contact container my-5 py-5">
            <div className="row d-flex align-items-center">
                <div className="col-lg-6">
                    <img className="img-fluid" src={bannerImage2} alt=""/>
                </div>
                <div className="col-lg-6">
                    <h2>STAY RUNNING & Project</h2>
                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <a href="#" className="btn">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;