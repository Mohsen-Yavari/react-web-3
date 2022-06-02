import React from 'react';
import "./features.scss";

const featuresData = [
    {
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از',
      icon:<i class="ri-hospital-fill"></i>
    },
    {
      title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
      icon:<i class="ri-mail-settings-line"></i>
    },
    {
      title: 'لورم ایپسوم متن ساختگی',
      icon:<i class="ri-at-fill"></i>    
    },
    {
      title: 'لورم ایپسوم متن ساختگی',
      icon:<i class="ri-cloud-line"></i>
    },
  ];

const Features = () => {
    return (
        <div className="container features">
            <div className="row">
                <div className="col">
                    <h1>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </h1>
                   
                        {featuresData.map((val)=>(
                             <div className="feature-section">
                            <h2>{val.title}</h2>
                            <span>{val.icon}</span>
                            </div>
                        ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Features;