import React, {useState} from 'react'
import "./Bmi.css" 

function Bmi() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('입력안했잖아 입력하고 눌러')
    } else {
      let bmi = Number(weight / (height / 100) ** 2);
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 18.5) {
        setMessage('저체중 입니다 살좀쪄;')
      } else if (bmi >= 18.5 && bmi < 22.9) {
        setMessage('딱 건강한 체중입니다')
      } else {
        setMessage('다이어트가 시급합니다.')
      }
    }
  }

  //  show image based on bmi calculation
 let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 18.5) {
      imgSrc = require("../../../assets/underweight.jpg")
    } else if (bmi >= 18.5 && bmi < 22.9) {
      imgSrc = require("../../../assets/healthy.jpg")
    } else {
      imgSrc = require("../../../assets/overweight.jpg")
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI 계산기</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>체중 </label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label> 키 </label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>결과보기</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>다시하고싶니?</button>
          </div>
        </form>

        <div className='center'>
          <h3>당신의 BMI : {bmi}</h3>
          <p>{message}</p>
         
        </div>
        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
        
      </div>
    </div>
  );
}

export default Bmi;