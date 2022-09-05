import React from 'react'
import "./Card.css"
import sul from "../../../assets/sul.jpg";
import gom from "../../../assets/libr.jpg";
import com from "../../../assets/comu.jpg";

const Card = () => {
  return (
      <section class="info_section">
          <div class="info_wrap">
              <strong class="info_title">
                AAH는 개인이 필요한 모든 건강지식과 <br/> 스스로 건강을 체크하고  영양제 비교 추천 서비스 입니다.
              </strong>
              <div class="info_area">
                <ul>
                    <li>
                        <img src={sul} alt="설문조사"/>
                        <p>
                            설문조사를 통해 개인에게 필요한 영양체를 추천해주는 시스템
                        </p>
                    </li>
                </ul> 
                <ul>
                    <li>
                        <img src={gom} alt="라이브러리"/>
                        <p>
                            각각 필요한 건강지식과 영양소를 찾아보볼수 있는 라이브러리
                        </p>
                    </li>
                </ul> 
                <ul>
                    <li>
                        <img src={com} alt="커뮤니티"/>
                        <p>
                            서로서로 정보를 얻을수 있는 커뮤니티
                        </p>
                    </li>
                </ul> 
              </div>
          </div>
      </section>
    
  )
}

export default Card