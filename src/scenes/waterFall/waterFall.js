import React, { useState } from 'react';
import './index.css'
const WaterFall = (props) => {

    return (
        <section className="waterfallfee">
            <div className="container">

                <div className="row">
                    <h2 className="title-work-waterfall"> Waterfall Fee Structure</h2>

                    <div className="mt-5 pt-5 mb-5">
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5">
                                <div className="fee-box">
                                    <div className="header">
                                        <div>Trial Plan</div>
                                    </div>
                                    <div className="body">
                                       <h4>6.34%</h4>
                                       <div>
                                           <div className="d-flex">
                                               <div>Access to mpartial engine</div>
                                           </div>
                                           <div className="d-flex">
                                               <div>Access to mpartial engine</div>
                                           </div>
                                       </div>
                                       <h4 style={{fontSize:'30px' , marginTop:'101px'}}>Free</h4>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-lg-5">
                            <div className="fee-box">
                                    <div className="header header-paid">
                                        <div>Enterprise Plan</div>
                                    </div>
                                    <div className="body">
                                       <h4>4.12%</h4>
                                       <div>
                                           <div className="d-flex">
                                               <div>Access to mpartial engine</div>
                                           </div>
                                           <div className="d-flex">
                                               <div>Discounted fee schedule</div>
                                           </div>
                                           <div className="d-flex">
                                               <div>Unlimited collaborators</div>
                                           </div>
                                           <div className="d-flex">
                                               <div>Dedicated account manager</div>
                                           </div>
                                           <div className="d-flex">
                                               <div>Prioritized turnaround time</div>
                                           </div>
                                           <div className="d-flex">
                                               <div>Minimum $750 initial deposit</div>
                                           </div>
                                       </div>
                                       <h4 style={{fontSize:'30px'}}>Free</h4>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WaterFall;