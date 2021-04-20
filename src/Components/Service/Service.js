import React from 'react';
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';


const Service = () => {
    return (
        <div className="container-fluid serviceIllustration">
            <div className="service container mt-5 text-center ">

                <div className="service-header">
                    <h2>What we do</h2>
                    <p>Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <div className="card border-0 bg-none">
        <div id="service" className="service mt-5 text-center">
            <div className="container">
                <div className="service-header">
                    <h2>What we do</h2>
                    <p>Our main focus is to make the User Experience very <br/>
                        simple and easy. Simplicity is our Strength.</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="service-card">
                            <div className="card-body zoom">
                                <img className="img-fluid" src={service1} alt="" />
                                <h4 className="mt-4 mb-3">Experience Design</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 bg-none">
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="service-card">
                            <div className="card-body zoom">
                                <img className="img-fluid" src={service2} alt="" />
                                <h4 className="mt-4 mb-3">Interface Design</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 bg-none">
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="service-card">
                            <div className="card-body zoom">
                                <img className="img-fluid" src={service3} alt="" />
                                <h4 className="mt-4 mb-3">Prototyping</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 bg-none">
                    <div className="col-lg-3 col-md-6 mt-5">
                        <div className="service-card">
                            <div className="card-body zoom">
                                <img className="img-fluid" src={service4} alt="" />
                                <h4 className="mt-4 mb-3">Illustration</h4>
                                <p>The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

