import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import UseLocalStorage from "./UseLocalStorage";

function App() {
  const [html,setHtml] = UseLocalStorage('html','')
  const [css,setCss] = UseLocalStorage('css','')
  const [js,setJs] = UseLocalStorage('js','')
  const [srcDoc, setSrcDoc]= useState('')

  useEffect(() => {
    const timeOut = setTimeout(()=>{
          setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
          `)
    },280)
    
    return () => {clearTimeout(timeOut)}
  }, [html,css,js])


  return (
    <>
      <div className="pane top-pane">
        <Editor 
          language='xml' 
          displayName='HTML' 
          value={html} 
          onChange ={setHtml} 
        />
        <Editor 
          language='css' 
          displayName='CSS' 
          value={css} 
          onChange ={setCss} 
        />
        <Editor 
          language='js' 
          displayName='JS' 
          value={js} 
          onChange ={setJs} 
        />
      </div>
      <div className="bottom-pane">
        <iframe
          srcDoc = {srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height='100%'
        ></iframe>
      </div>
    </>
  );
}

export default App;
