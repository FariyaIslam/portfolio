import React from 'react'
import './Features.css'
import { GlobeAltIcon, ScaleIcon, AnnotationIcon, LightningBoltIcon } from '@heroicons/react/outline'
const Features = () => {
    return (
        <section className="features__parent">
            <div className="features__heading">
                <span>TRANSACTIONS</span>
                <h2>A better way to send money</h2>
                <p>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam <br /> voluptatum cupiditate veritatis in accusamus quisquam.</p>

            </div>
            <div className="features__list">

                <div className="parent">
                    <div className="box">
                        <GlobeAltIcon className="icon"></GlobeAltIcon>
                    </div>
                    <div>
                        <h3>Competitive exchange rates</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>

                </div>


                <div className="parent">
                    <div className="box">
                        <AnnotationIcon className="icon"></AnnotationIcon>
                    </div>
                    <div>
                        <h3>Competitive exchange rates</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>


                <div className="parent">
                    <div className="box">
                        <ScaleIcon className="icon ">  </ScaleIcon>
                    </div>
                    <div>
                        <h3>Competitive exchange rates</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>

                <div className="parent">
                    <div className="box">
                        <LightningBoltIcon className="icon"></LightningBoltIcon>
                    </div>
                    <div>
                        <h3>Competitive exchange rates</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Features
