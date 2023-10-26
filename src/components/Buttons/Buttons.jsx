import React from 'react'
import './Buttons.css'
function Buttons({changeBackground}) {
  return (
    <div className='button-div'>
       
           <div className='button-div1'>
                <div className='button' onClick={()=>changeBackground('orange')} >Orange</div>
                <div className='button' onClick={()=>changeBackground('red')} >Red</div>
                <div className='button' onClick={()=>changeBackground('blue')} >Blue</div>
                <div className='button' onClick={()=>changeBackground('green')} >Green</div>
                <div className='button'onClick={()=>changeBackground('yellow')} >Yellow</div>
                <div className='button'onClick={()=>changeBackground('purple')} >Purple</div>
                <div className='button'onClick={()=>changeBackground('black')} > Black</div>
                <div className='button'onClick={()=>changeBackground('brown')} > Brown</div>
           </div>

           
           <div className='button-div2'>
                <div className='button' onClick={()=>changeBackground('pink')} >Pink</div>
                <div className='button' onClick={()=>changeBackground('skyblue')} >Skyblue</div>
                <div className='button' onClick={()=>changeBackground('magenta')} >Magenta</div>
                <div className='button' onClick={()=>changeBackground('Violet')} >Violet</div>
                <div className='button'onClick={()=>changeBackground('lightgreen')} >Light Green</div>
                <div className='button'onClick={()=>changeBackground('navy')} >Navy Blue</div>
                <div className='button'onClick={()=>changeBackground('bisque')} > Bisque</div>
                <div className='button'onClick={()=>changeBackground('brown')} > Brown</div>
           </div>
       

    </div>
  )
}

export default Buttons