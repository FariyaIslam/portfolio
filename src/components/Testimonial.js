import React from 'react'
import './Testimonial.css'
import { ChatAlt2Icon } from '@heroicons/react/outline'

const Testimonial = () => {
    return (
        <section className="testimonial__parent">
            <div className="testimonial__heading">
                <h2>Testimonials</h2>
            </div>

            <div className="testimonial__list">
                <div className="testimonial__svg">
                    <ChatAlt2Icon></ChatAlt2Icon>
                </div>
                <div className="testimonial__content">
                    <div className="testimonial__content1 card">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.</p>

                    </div>
                    <div className="testimonial__content2 card">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis</p>

                    </div>
                    <div className="testimonial__content3 card" >
                        <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis</p>

                    </div>

                </div>

                <div>

                </div>

            </div>

        </section>
    )
}

export default Testimonial
