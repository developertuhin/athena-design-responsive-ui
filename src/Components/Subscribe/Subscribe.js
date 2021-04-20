import React from 'react';

const componentName = () => {
    return (
        <div className="subscribe container text-center my-5">
            <div className="subscribe-header">
                <h2>Get your design right, right now</h2>
                <p>Be the first know our latest offers and updates!</p>
            </div>
            <div className="subscribe-field row mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-8 col-6">
                    <input type="email" class="form-control border-0 shadow-none" placeholder="Enter your email address"></input>
                </div>
                <div className="col-md-4 col-6 text-right">
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default componentName;