import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { save } from './post';
import { Editor } from './get';
import { Delete } from './delete';
//import axios from axios

function App() {

  const [state, setState] = useState({
    html_code: '',
    css_code: '',
    js_code: '',
    name: '',
    files: [],
    response: ''
  })


  let run = ()=> {
  let output = document.getElementById('output');

  output.contentDocument.body.innerHTML = `${state.html_code} <style> ${state.css_code} </style> <script>${state.js_code}</script>` ;
  // output.contentWindow.eval(jscode);
  }

  function Files(){
    return(
      <div>
      <label>Files</label>
      {state.files.map(file=>(
        <div>
        <div onClick={()=>openFile(file)} key={file.id}>
          <h5>{file.name}</h5>
        </div>
        <button id='delete' onClick={()=> delet(file.id)}>Delete</button>
        </div>
      ))}
      </div>
    )
  }

  function openFile(file){
    let output = document.getElementById('output');
    output.contentDocument.body.innerHTML = `${file.html_code} <style> ${file.css_code} </style> <script>${file.js_code}</script>` ;
    setState({
      ...state,
      name: file.name,
      html_code:file.html_code,
      css_code: file.css_code,
      js_code: file.js_code
    })
   
  }

  async function delet(id){
    const response = await Delete(id)
    if(response.ok){
      const files = state.files.filter(file=>{
        if(file.id !== id){
          return file
        }
      })
      setState({
        ...state,
        files: files,
        html_code:'',
        css_code: '',
        name: '',
        js_code: ''
      })
    }
    else{
      setState({
        ...state,
        response: "Failed to Delete Please Try agian"
      })
      window.setTimeout(()=>{
        setState({
          ...state,
          response: ''
        })
      },2000)
    }
  }

  React.useEffect(()=>{
    Data()
  },[])

  let Data = async ()=> {
    const files = await Editor()
    if(files !== 0){
      setState({
        ...state,
        files: files
      })
    }
    // document.querySelector('#files').innerHTML = '<label>Files</label>'
    // files.forEach(element => {
    //   const h5 = document.createElement('h5')
    //   h5.innerHTML = `${element.name}`
    //   const button = document.createElement('button');
    //     button.id = 'delete';
    //     button.innerHTML = 'Delete';
    //   document.querySelector('#files').append(h5)
    //   document.querySelector('#files').append(button)
    //   button.addEventListener('click', ()=> {
    //     fetch(`http://localhost:8080/delete/${element.id}`, {method:'delete'})
    //     window.location.reload(true)
    //   })
    //   h5.addEventListener('click', ()=> {
    //     document.getElementById('html-code').value = element.html_code;
    //     document.getElementById('css-code').value = element.css_code;
    //     document.getElementById('js-code').value = element.js_code;
    //     document.getElementById('name').value = element.name;
    //     document.querySelector('#submit').addEventListener('click', ()=> {
    //       window.location.reload(true)
    //     })
    //     // document.querySelector('#delete').addEventListener('click',del(element.id));
    //   })
    // });
  }

  function setHtml_code(e){
    setState({
      ...state,
      html_code: e.target.value
    })
  }

  function setName(e){
    setState({
      ...state,
      name: e.target.value
    })
  }

  function setCss_code(e){
    setState({
      ...state,
      css_code: e.target.value
    })
  }

  function setJs_code(e){
    setState({
      ...state,
      js_code: e.target.value
    })
  }

  


  const saveFile = async (e)=> {
    e.preventDefault()
    const formData = new FormData()
    formData.append('html_code', state.html_code)
    formData.append('css_code', state.css_code)
    formData.append('js_code', state.js_code)
    formData.append('name', state.name)
    const saved = await save(formData)
    if(saved.id){
      setState({
        ...state,
        files: [...state.files, saved]
      })
    }
    else{
      setState({
        ...state,
        response: 'Failed To Save'
      })
      window.setTimeout(()=>{
        setState({
          ...state,
          response: ''
        })
      },2000)
    }
  }

  return (
    <div className="container">
      <div id='files'>
        <Files />
      </div>
      <h1>{state.response}</h1>
        <div className="left">
          <form onSubmit={saveFile} id='form'>
            <input type='text' value={state.name} onChange={setName} placeholder='Filename' id='name' required></input>
            <label>HTML</label>
            <textarea id="html-code" value={state.html_code} className="code" onKeyUp={run} onChange={setHtml_code} required></textarea>

            <label>CSS</label>
            <textarea id="css-code" value={state.css_code} className="code" onKeyUp={run} onChange={setCss_code}></textarea>

            <label>JavaScript</label>
            <textarea id="js-code" value={state.js_code} className="code"  onChange={setJs_code}></textarea>
            <button type='submit' id='submit'>Save</button>
            </form>
            
        </div>
        
        <div className="right">
            <label>Output</label>
            <iframe id="output"></iframe>
        </div>
    </div>
  );
}

export default App;
