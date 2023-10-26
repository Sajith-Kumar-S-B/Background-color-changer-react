import React, {  useState } from 'react'
import './Landing.css';
import Buttons from '../Buttons/Buttons';

function Landing() {

  const [backgroundColor,setBackgroundColor] = useState('black')
  const changeBackground = (color)=>{
    setBackgroundColor(color)
  }

  const randomBackground =()=>{
    const randomColor = getRandomColor()
    setBackgroundColor(randomColor)
  }


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  
  return (
    <div className='landing' style={{width:'100%',height:'100vh',backgroundColor}}>
        <div className='main'>
            <h1>
              Background  Color Changer 
            </h1>
        </div>
        <Buttons changeBackground={changeBackground} />

        <div className='random' onClick={randomBackground}>
          <h3>Random Color</h3>
        </div>


      
    </div>
  )
}

export default Landing