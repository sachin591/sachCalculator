import React,{useState} from 'react'
import './App.css';




const App = () => {

  const[result , setResult]=useState("");

  const clickButton=(event)=>{
  setResult(result.concat(event.target.value))
  }

  const Back= ()=>{
    setResult(result.substring(0, result.length-1))
  }


  const clearDisplay=()=>{
  setResult("");
  }


  const calculate =()=>{

    setResult(eval(result).toString());
  }



  return (
    <div className='calc'>
      <input type="text"  placeholder='0' name="" id="answer"  value={result}/>
      <input type="button" value='9'  className='button' onClick={clickButton}/>
      <input type="button" value='8'  className='button' onClick={clickButton}/>
      <input type="button" value='7'  className='button' onClick={clickButton}/>
      <input type="button" value='6'  className='button' onClick={clickButton}/>
      <input type="button" value='5'  className='button' onClick={clickButton}/>
      <input type="button" value='4'  className='button' onClick={clickButton}/>
      <input type="button" value='3'  className='button' onClick={clickButton}/>
      <input type="button" value='2'  className='button' onClick={clickButton}/>
      <input type="button" value='1'  className='button' onClick={clickButton}/>
      <input type="button" value='0'  className='button' onClick={clickButton}/>
      <input type="button" value='.'  className='button' onClick={clickButton}/>
      <input type="button" value='+'  className='button' onClick={clickButton}/>
      <input type="button" value='-'  className='button' onClick={clickButton}/>
      <input type="button" value='*'  className='button' onClick={clickButton}/>
      <input type="button" value='/'  className='button' onClick={clickButton}/>
      <input type="button" value='%'  className='button' onClick={clickButton}/>
      <input type="button" value='Back'  className='button button1' onClick={ Back}/>
      <input type="button" value='='  className='button button1' onClick={calculate}/>
      <input type="button" value='Clear'  className='button button2' onClick={clearDisplay}/>
    </div>
  )
}

export default App;
