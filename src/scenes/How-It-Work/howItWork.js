import React from 'react';
import './index.css'
const howItWork = (props) => (
    <section className="how-it-work">
        <div className="container">
            <div className="row">
                <h2 className="title-work"> How It Works
                </h2>
                <div className="data-points">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="data-points-item row">
                                <div className="data-number data_number_1 col-md-4 col-sm-12">
                                    1
                                </div>
                                <div className="data-text  col-md-8 col-sm-12 ">
                                    <a href="#">                                    Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="data-points-item row">
                                <div className="data-number data_number_1 col-md-4 col-sm-12">
                                    2
                                </div>
                                <div className="data-text  col-md-8 col-sm-12 ">
                                    <a href="#">                                    Submit the Matterport scans via the mpartial portal and then go back to what you do great
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="data-points-item row">
                                <div className="data-number data_number_1 col-md-4 col-sm-12">
                                    3
                                </div>
                                <div className="data-text  col-md-8 col-sm-12 ">
                                    <a href="#">
                                        Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TruePlan SKX.
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="try-now-btn">
                    <a href="#">
                        <button className="btn">Try Today</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default howItWork;