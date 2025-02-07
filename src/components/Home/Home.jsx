import React from 'react';
import { Carousel } from 'antd';
import foto1 from "../../assets/1000093556.jpg";
import foto2 from "../../assets/1000093557.jpg";
import foto3 from "../../assets/1000093558.jpg";
import foto4 from "../../assets/1000093559.jpg";
import foto5 from "../../assets/1000093560.jpg";
import foto6 from "../../assets/WhatsApp Image 2025-02-02 at 09.49.37.jpeg";
import foto7 from "../../assets/unnamed.jpg";
import foto8 from "../../assets/unnamed (1).jpg";
import foto9 from "../../assets/unnamed (2).jpg";
import foto10 from "../../assets/unnamed (3).jpg";
import "./Home.scss";

const Home = () => {
  return (
    <div className='container-carousel'>
      
      <div className='carousel-wrapper'>
        <Carousel autoplay>
          <div><img src={foto1} className='fotos' alt="foto1" /></div>
          <div><img src={foto2} className='fotos' alt="foto2" /></div>
          <div><img src={foto3} className='fotos' alt="foto3" /></div>
          <div><img src={foto4} className='fotos' alt="foto4" /></div>
          <div><img src={foto5} className='fotos' alt="foto5" /></div>
          <div><img src={foto6} className='fotos' alt="foto5" /></div>
          <div><img src={foto7} className='fotos' alt="foto5" /></div>
          <div><img src={foto8} className='fotos' alt="foto5" /></div>
          <div><img src={foto9} className='fotos' alt="foto5" /></div>
          <div><img src={foto10} className='fotos' alt="foto5" /></div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;



