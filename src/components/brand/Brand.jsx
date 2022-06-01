import React from 'react';
import "./brand.scss";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlasian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopyfy from "../../assets/shopify.png";

const brandImg = [
    {
        img:google
    },
    {
        img:slack
    },
    {
        img:atlasian
    },
    {
        img:dropbox
    },
    {
        img:shopyfy
    },
]

const Brand = () => {
    return (
        <div class="brand container">
              <div class="row">
                    <div class="col brandCol">
                        {brandImg.map((val)=>(
                           
                                <img src={val.img} alt="" />
          
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default Brand;