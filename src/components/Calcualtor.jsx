import React from 'react'
import './Calcualator.css'
import { useState } from 'react'

function Calcualtor() {

const [input,setInput] = useState('')
const [result,setResult] = useState('0')

const handleInput = (value) => {
    setInput(input + value)
}

const handleButtonClick = (value) =>{
    if(value === 'AC'){
        setResult('0')
        setInput('')
    }
    else if(value === 'DEL'){
        setInput(input.slice(0, -1))
    }
    else if(value === '='){
        try{
            const expResult = eval(input)
            setResult(expResult)
            setInput(expResult.toString())
        }
        catch(error){
            setResult("Error!!! invalid Expresseion")
            setInput('')
        }
    }
}

  return (
    <>
        <div className='container'>
            <h1>Calculator</h1>
            <div className='calculator shadow'>   
                <div className='screen'>
                    {
                    input?.length>0 ?
                     input
                    : result
                }               
                </div>
                <div className='button-container'>
                    <div className='d-flex align-items-center justify-content-around mb-3'>
                        <button onClick={()=>handleButtonClick('AC')} style={{width:'12.5rem'}} className='clculator-buttons shadow'>AC</button>
                        <button onClick={()=>handleButtonClick('DEL')} className='clculator-buttons shadow'>DEL</button>
                        <button onClick={()=>handleInput('/')} className='clculator-buttons shadow'>/</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-around mb-3'>
                        <button onClick={()=>handleInput('7')} className='clculator-buttons shadow'>7</button>
                        <button onClick={()=>handleInput('8')} className='clculator-buttons shadow'>8</button>
                        <button onClick={()=>handleInput('9')} className='clculator-buttons shadow'>9</button>
                        <button onClick={()=>handleInput('*')} className='clculator-buttons shadow'>x</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-around mb-3'>
                        <button onClick={()=>handleInput('4')} className='clculator-buttons shadow'>4</button>
                        <button onClick={()=>handleInput('5')} className='clculator-buttons shadow'>5</button>
                        <button onClick={()=>handleInput('6')} className='clculator-buttons shadow'>6</button>
                        <button onClick={()=>handleInput('+')} className='clculator-buttons shadow'>+</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-around mb-3'>
                        <button onClick={()=>handleInput('1')} className='clculator-buttons shadow'>1</button>
                        <button onClick={()=>handleInput('2')} className='clculator-buttons shadow'>2</button>
                        <button onClick={()=>handleInput('3')} className='clculator-buttons shadow'>3</button>
                        <button onClick={()=>handleInput('-')} className='clculator-buttons shadow'>-</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-around mb-3'>
                        <button onClick={()=>handleInput('0')} className='clculator-buttons shadow'>0</button>
                        <button onClick={()=>handleInput('.')}className='clculator-buttons shadow'>.</button>
                        <button onClick={()=>handleButtonClick('=')} style={{width:'12.5rem'}} className='clculator-buttons shadow'>=</button>
                    </div>
                </div>
            </div> 
        </div>
    </>
   
  )
}

export default Calcualtor