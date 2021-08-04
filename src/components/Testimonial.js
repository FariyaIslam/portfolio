import React from 'react'
import './Testimonial.css'
import { ChatAlt2Icon } from '@heroicons/react/outline'
import peopleImg from "../assets/img/use-ai-to-make-pictures-of-fake-people.jpg"
const Testimonial = () => {
    return (
        <section className="testimonial__parent">
            <div className="testimonial__heading">
                <h2>Testimonial</h2>
            </div>

            <div className="testimonial__list">
                <div className="testimonial__content">

                    <div className="testimonial__content1 card">
                        <div className="testimonial__svg">
                            <ChatAlt2Icon></ChatAlt2Icon>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.</p>
                        <div className="circle">
                            <img src={peopleImg} alt="people" width="100%" height="100%" />
                        </div>

                    </div>


                    <div className="testimonial__content2 card middleCard">
                        <div className="testimonial__svg">
                            <ChatAlt2Icon></ChatAlt2Icon>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis</p>
                        <div className="circle">
                            <img src={peopleImg} alt="people" width="100%" height="100%" />
                        </div>

                    </div>
                    <div className="testimonial__content3 card" >
                        <div className="testimonial__svg">
                            <ChatAlt2Icon></ChatAlt2Icon>
                        </div>
                        <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione ratione.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis</p>

                        <div className="circle">
                            <img src={peopleImg} alt="people" width="100%" height="100%" />
                        </div>
                    </div>

                </div>

                <div>

                </div>

            </div>

        </section>
    )
}

export default Testimonial
