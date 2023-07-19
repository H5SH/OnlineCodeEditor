import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
//import axios from axios

function App() {

  let run = ()=> {
  let htmlcode = document.getElementById('html-code').value;
  let csscode = document.getElementById('css-code').value;
  let jscode = document.getElementById('js-code').value;
  let output = document.getElementById('output');

  output.contentDocument.body.innerHTML = htmlcode + '<style>'+csscode+'</style>';
  output.contentWindow.eval(jscode);
  }

  let Data = async ()=> {
    const result = await fetch('http://localhost:8080/Editor',{method: 'get'})
    const response = await result.json()
    //document.querySelector('#files').innerHTML = '';
    document.querySelector('#files').innerHTML = '<label>Files</label>'
    response.forEach(element => {
      const h5 = document.createElement('h5')
      h5.innerHTML = `${element.name}`
      const button = document.createElement('button');
        button.id = 'delete';
        button.innerHTML = 'Delete';
      document.querySelector('#files').append(h5)
      document.querySelector('#files').append(button)
      button.addEventListener('click', ()=> {
        fetch(`http://localhost:8080/delete/${element.id}`, {method:'delete'})
        window.location.reload(true)
      })
      h5.addEventListener('click', ()=> {
        document.getElementById('html-code').value = element.html_code;
        document.getElementById('css-code').value = element.css_code;
        document.getElementById('js-code').value = element.js_code;
        document.getElementById('name').value = element.name;
        document.querySelector('#submit').addEventListener('click', ()=> {
          window.location.reload(true)
        })
        // document.querySelector('#delete').addEventListener('click',del(element.id));
      })
    });
  }

  // let submit = ()=> {
  //   if (document.getElementById('name').value !== '')
  //   {
  //     fetch("http://localhost:8080/saved", {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: document.getElementById('name').value,
  //       htmlcode: document.getElementById('html-code').value,
  //       csscode: document.getElementById('css-code').value,
  //       jscode: document.getElementById('js-code').value
  //       })
  //     })
  //     .then(result => result.json)
  //     .then(data => {

  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  //   }
  //   else{
  //     alert("Filename must be mentioned");
  //   }
    
  // }
  // action='http://localhost:8080/saved' method='post' id='form'
  //  action='http://localhost:8080/saved' method='post'
  let save = ()=> {
    fetch('http://localhost:8080/saved', {method: 'post'})
  }

Data()
  return (
    <div className="container">
      <div id='files'>
      </div>
        <div className="left">
          <form action='http://localhost:8080/saved' method='post' id='form'>
            <input type='text' name='name' placeholder='Filename' id='name' required></input>
            <label>HTML</label>
            <textarea id="html-code" className="code" onKeyUp={run} name='html_code' required></textarea>

            <label>CSS</label>
            <textarea id="css-code" className="code" onKeyUp={run} name='css_code'></textarea>

            <label>JavaScript</label>
            <textarea id="js-code" className="code" onKeyUp={run} name='js_code'></textarea>
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
