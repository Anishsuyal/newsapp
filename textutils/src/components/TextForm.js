import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }

    const handledownclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }

     const handletitlecaseclick = () => {
        if (!text) return;
        let newtext = text
        .toLowerCase()
        .split(' ')
        .filter(word => word) // remove empty strings
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        setText(newtext);
    };

    const handlecopytext=()=>{
        navigator.clipboard.writeText(text)
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text, setText]=useState('')
  return (
    <>
    <div className='container my-3' style={{color: props.mode=='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode=='dark'?'#13466e':'white',color: props.mode=='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="5"></textarea> 
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleupclick}>Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handledownclick}>Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletitlecaseclick}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handlecopytext}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode=='dark'?'white':'black'}}>
        <h2>you text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    
    </>
    
  )
}
