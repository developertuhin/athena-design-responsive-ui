import React from 'react'
import icon1 from '../../images/happy.png'
import icon2 from '../../images/marketing.png'
import icon3 from '../../images/surface.png'
import icon4 from '../../images/transportation.png'

const Achievement = () => {
    return (
        <div className="container-fluid achivementIllustration">
            <div className="achievement container my-5 py-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <h2>Our Achievements</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-6 my-4">
                                <div className="card shadow-sm achivementCardActive">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img height='50' className="img-fluid" src={icon1} alt="" />
                                            </div>
                                            <div className="content pl-4">
                                                <h3>700+</h3>
                                                <p>Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className="card shadow-sm achivementCard">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img className="img-fluid" src={icon2} alt="" />
                                            </div>
                                            <div className="content pl-4">
                                                <h3>140+</h3>
                                                <p>Projects Completed</p>
                                            </div>
                                        </div>
        <div id="achievement" className="achievement container my-5 py-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    <h2>Our Achievements</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <div className="achievement-card gradient-bg p-3 right-radius">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <img className="img-fluid" src={icon1} alt=""/>
                                    </div>
                                    <div className="content pl-4">
                                        <h3 style={{color: '#FFFFFF'}}>700+</h3>
                                        <p style={{color: '#FFFFFF'}}>Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="achievement-card p-3 white-bg left-radius">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <img className="img-fluid" src={icon2} alt=""/>
                                    </div>
                                    <div className="content pl-4">
                                        <h3>140+</h3>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 my-4">
                                <div className="card shadow-sm achivementCard">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img className="img-fluid" src={icon3} alt="" />
                                            </div>
                                            <div className="content pl-4">
                                                <h3>25+</h3>
                                                <p>Crazy Minds</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 my-4">
                                <div className="card shadow-sm achivementCard">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="icon">
                                                <img className="img-fluid" src={icon4} alt="" />
                                            </div>
                                            <div className="content pl-4">
                                                <h3>75+</h3>
                                                <p>Running Projects</p>
                                            </div>
                                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <div className="achievement-card p-3 white-bg left-radius">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <img className="img-fluid" src={icon3} alt=""/>
                                    </div>
                                    <div className="content pl-4">
                                        <h3>25+</h3>
                                        <p>Crazy Minds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="achievement-card p-3 white-bg right-radius">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <img className="img-fluid" src={icon4} alt=""/>
                                    </div>
                                    <div className="content pl-4">
                                        <h3>75+</h3>
                                        <p>Running Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement
