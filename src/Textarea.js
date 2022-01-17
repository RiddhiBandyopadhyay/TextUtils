import React, {useState} from 'react';

const Textarea = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handleUpper = () => {
    let newTextU = text.toUpperCase();
    setText(newTextU);
  }
  const handleLower = () => {
    let newTextL = text.toLowerCase();
    setText(newTextL);
  }
  const removeExtra = () => {
    let sp = text.split(/[ ]+/);
    setText(sp.join(" "));
  }
  const clearText = () => {
    let blankText = "";
    setText(blankText);
  }
  const handleCopy = () => {
    let text = document.getElementById("floatingTextarea");
    navigator.clipboard.writeText(text.value);
  }
  
  return (
    <>
    <div style = {{color : props.mode === 'light' ? '#141f1f' : 'white'}}>
    <div><h2>Enter your text to analyze</h2></div>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary my-3 mx-1" onClick = {handleUpper}>UPPERCASE</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-secondary my-3 mx-1" onClick = {handleLower}>lowecase</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-warning my-3 mx-1" onClick = {removeExtra}>Remove Extra Space</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-success my-3 mx-1" onClick = {handleCopy}>Copy Text</button>
        <textarea
          style = {{backgroundColor : props.mode === 'light' ? 'white' : '#001a33',
                    color : props.mode === 'light' ? 'black' : 'white'}}
          value = {text}
          className="form-control"
          placeholder="Your text goes here!"
          id="floatingTextarea"
          rows = "7"
          onChange = {handleOnChange}
        ></textarea>
        <div className = "my-4">
          <h3>Text Summery</h3>
          <p id = "chars">{text?text.length:0} number of character(s)</p>
          <p id = "words">{text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length} number of word(s)</p>
        </div>
        <button disabled = {text.length === 0} type="button" className="btn btn-danger " onClick = {clearText}>Clear Text</button>
    </div>
    </>
  );
};

export default Textarea;
