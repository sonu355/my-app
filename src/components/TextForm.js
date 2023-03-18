import React, { useState } from "react"
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("hello" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    console.log("hello" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (e) => {
    console.log("Changed")
    setText(e.target.value)
  }
  const clearText = () => {
    setText('')
  }
  const copyText = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const [text, setText] = useState("")
  //setText("Enter text here") //to change the text
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'light', 
          color: props.mode === 'dark'?'white':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary' onClick={handleLoClick}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-3' onClick={clearText}>Clear</button>
        <button className='btn btn-primary mx-3' onClick={copyText}>Copy</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length - 1} and {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes Required To Read</p>
        <h2>{text.length > 0 ? text : "Enter Text To Preview"}</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
