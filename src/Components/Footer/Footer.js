import React from 'react';
import footerLogo from '../../images/logo.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import linkedIn from '../../images/linkedin.png';
import dribbble from '../../images/dribbble.png';

const Footer = () => {
    return (
        <div className="footer container mt-lg-5 mt-0 py-5">
            <div className="row">
                <div className="col-md-4 mt-3">
                    <img className="footer-logo" src={footerLogo} alt=""/>
                    <div className="social-links mt-4">
                        <a href="#" className="mr-4">
                            <img src={facebook} alt=""/>
                        </a>
                        <a href="#" className="mr-4">
                            <img src={twitter} alt=""/>
                        </a>
                        <a href="#" className="mr-4">
                            <img src={linkedIn} alt=""/>
                        </a>
                        <a href="#">
                            <img src={dribbble} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <ul  className="list-unstyled">
                        <li className="py-2">
                            <a href="#">Features</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Enterprise</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 mt-3">
                    <ul  className="list-unstyled">
                        <li className="py-2">
                            <a href="#">Blog</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Help Center</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Contact Us</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Status</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 mt-3">
                    <ul  className="list-unstyled">
                        <li className="py-2">
                            <a href="#">About Us</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Terms of Service</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Security</a>
                        </li>
                        <li className="py-2">
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;