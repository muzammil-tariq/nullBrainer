import React, { useState } from 'react';
import Title from '../../components/title';
import './index.css'
import icon from '../../assets/icon.png'
const WaterFall = (props) => {
    const [num, setNum] = useState(1);
    const onSliderChange = (e) => {
        const fill = document.querySelector('.slider-waterfall #slider-input');
        const tooltip = document.querySelector('.slider-waterfall .slider-tooltip');
        const min = fill.min
        const max = fill.max
        const val = fill.value
        fill.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
        tooltip.style.left = (parseInt(e.target.value) + 25) + 'px'
        setNum(e.target.value)
    }
    return (
        <section className="waterfallfee">
            <div className="container">

                <div className="row">
                    <Title title="Waterfall Fee Structure" />

                    <div className="slider-intro">
                        <p>
                            Drag the slider around based on what you think it will cost to repair the property.
                            Move forward based on the estimated fee structure below.
                        </p>
                    </div>
                    <div className="slider-waterfall">
                        <div className="slider-tooltip">
                            <span>
                                <div className="slider-tooltip-price">
                                    <b>${num}K</b>
                                </div>
                                <div className="slider-tooltip-text">
                                    <p>Estimated Grand Total</p>
                                </div>
                            </span>
                        </div>
                        <input type="range" id="slider-input" value={num} step="50" onChange={onSliderChange} min={0} max={1000} />
                        <div className="limit">
                            <span className="first">$0</span>
                            <span className="second">$250,000</span>
                            <span className="third">$500,000</span>
                            <span className="fourth">$750,000</span>
                            <span className="fifth">$1M+</span>
                        </div>

                    </div>

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
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Access to mpartial engine</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Access to mpartial engine</div>
                                            </div>
                                        </div>
                                        <h4 style={{ fontSize: '30px', marginTop: '101px' }}>Free</h4>
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
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Access to mpartial engine</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Discounted fee schedule</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Unlimited collaborators</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Dedicated account manager</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Prioritized turnaround time</div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="mr-2">
                                                    <img alt="" src={icon} className=" icon"></img>
                                                </div>
                                                <div>Minimum $750 initial deposit</div>
                                            </div>
                                        </div>
                                        <h4 style={{ fontSize: '30px' }}>$495/month</h4>
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