import React from 'react';
import "./header.scss";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
    return (
        <div className="container gradiant__bg">
            <div class="row">
                <div class="right-side col-sm-12 col-md-12 col-lg-6 " >
                    <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h1>
                    <p>
                    لورم ایپسوم متن ساختگی با ت
                    ولید سادگی نامفهوم از صنعت چاپ و 
                    با استفاده از طراحان گرافیک است
                    </p>
                    <div className="inputBox">
                        <input type="email" placeholder='ایمیل را وارد کنید' />
                        <button>جستجو</button>
                    </div>
                    <div className="people">
                        <img src={people} alt="" />
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 left-side">
                    <img src={ai} alt=""  />
                </div>
            </div>
        </div>
    );
};

export default Header;