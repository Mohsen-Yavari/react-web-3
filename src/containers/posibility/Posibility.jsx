import React from 'react';
import "./posibility.scss";
import posibility from "../../assets/possibility.png";

const Posibility = () => {
    return (
        <div className="posibility container">
            <div className='row'>
                <div className='col-md-12 col-lg-6'>
                    <div className='posibillity-section'>
                        <h6>لورم ایپسوم متن ساختگی با تولید</h6>
                        <h1>
                        لورم ایپسوم متن
                         ساختگی با تولید سادگی نامفهوم
                         از صنعت چاپ، و با استفاده
                        </h1>
                        <p>
                        لورم ایپسوم متن ساختگی با تولید 
                        سادگی نامفهوم از صنعت چاپ و با ا
                        ستفاده از طراحان گرافیک است چاپگ
                        رها و متون بلکه روزنامه و مجله 
                        در ستون و سطرآنچنان که لازم است
                        </p>
                        <h4>لورم ایپسوم متن ساختگی با</h4>

                    </div>
                </div>
                <div className='col-md-12 col-lg-6 '>
                    <div className='posibility-img'>
                        <img src={posibility} alt=""  />
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Posibility;