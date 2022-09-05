import React from 'react';
import "../LandingPage/LandingPage.css";
import Slider from "../Pagecontents/Slider/Slider";
import Slider2 from "../Pagecontents/slidebox/Sliders";
import Slider3 from "../Pagecontents/slidebox 2/Sliderss";
import Slider4 from "../Pagecontents/slidebox 3/Slidersss";
import Card from "../Pagecontents/Card/Card";

function LandingPage() {
    return (
        <div className='home'>
         
          <hr/>
          <div className='mini-menu'>
            <ul className='mm-style'>
              <li>
                <a href="/Hotels">
                 영양제 추천받기
                </a>
              </li>
            </ul>
            <ul className='mm-style'>
              <li>
                <a href="/bmical">
                  BMI 계산기
                </a>
              </li>
            </ul>
            <ul className='mm-style'>
              <li>
                <a href="/imformation">
                  건강정보 찾기
                </a>
              </li>
            </ul>
            <ul className='mm-style'>
              <li>
                <a href="/Board">
                  소통 커뮤니티
                </a>
              </li>
            </ul>
          </div>
          
          <Slider/>
          <br/><br/>
          <Card/>
          <br/>
          
      
          <Slider2/>
          <Slider3/>
          <Slider4/>
    
    
          <br/>
      
        </div>
      );
}

export default LandingPage
