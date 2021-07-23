import React from 'react';
import Title from '../../components/title';
import Carousal from '../../components/carousel/carousal';
import img from '../../assets/mp.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'


import './index.css';
function exampleDel(props) {
    return (
        <section className="example">
            <div className="container">
                <div className="row">
                    <Title title="Example Deliverables" />
                    <div className="scan">
                        <h4>Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)</h4>
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <img src={img} className="img"></img>
                        </div>
                        <div className="col-lg-1"></div>

                        <div className="col-lg-5">
                            <img src={img} className="img"></img>
                        </div>

                    </div>
                    <div className="scan " style={{ marginTop: '60px' }}>
                        <h4>Immaculate. Impartial. [ESX]</h4>
                    </div>
                    <div>
                        <Carousal />
                    </div>
                    <div className="scan a " style={{ marginTop: '60px' }}>
                        <a>MATTERPORT TRUEPLAN™ FOR XACTIMATE™</a>
                    </div>
                    <div className="sketch-container">
                        <img src={img1} className="img-map"></img>

                        <img src={img2} className="img-map"></img>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default exampleDel;