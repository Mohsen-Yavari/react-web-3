import React from 'react';
import "./blog.scss";

import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const blogUrl = [
    {
        img:blog1,
        text:"لورم ایپسوم متن ساختگی با تولید"
    },
    {
        img:blog2,
        text:"لورم ایپسوم متن ساختگی با "
    },
    {
        img:blog3,
        text:"لورم ایپسوم متن ساختگی با تولید"
    },
    {
        img:blog4,
        text:"لورم ایپسوم متن ساختگی با "
    },
    {
        img:blog5,
        text:"لورم ایپسوم متن ساختگی "
    }
]

const Blog = () => {
    return (
        <div className="blog container">
            <div className="row blog-section">
                {blogUrl.map((val)=>(
                        <div className="col blog-img">
                        <img src={val.img} s alt="" />
                        <p>{val.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;