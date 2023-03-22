import React, { useState } from 'react';
import axios from 'axios';

function GPT3API() {
  const [bearerSubmission, setBearerSubmission] = useState("");
  const [modelSubmission, setModelSubmission] = useState("");  
  const [promptSubmission, setPromptSubmission] = useState("");
  const [response, setResponse] = useState("");
  const id = "GPT3API"

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("*****************************")
    console.log("SETTING BEARER ID FOR GPT3:")
    console.log(bearerSubmission)
    console.log("*****************************")
    console.log("SETTING MODEL FOR GPT3:")
    console.log(modelSubmission)
    console.log("*****************************")
    console.log("SETTING PROMPT SUBMISSION FOR GPT3:")
    console.log(promptSubmission)
    console.log("*****************************")

    try {
      const result = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: promptSubmission,
        max_tokens: 10,
        //model: "text-davinci-003",
        
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': bearerSubmission,
          "model": "text-ada-001",
          "temperature": 1,
        }
      });

      {/**/}
      
      setResponse(result.data.choices[0].text);
      console.log("*****************************")
      console.log("SETTING RESPONSE FROM GPT3")
      console.log("RESULT DATA:")
      console.log(result.data.choices[0].text)
      //console.log("RESPONSE DATA:")
      //console.log(response)
      console.log("*****************************")
      document.getElementById('Sitepal-Iframe').contentWindow.location.reload();
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div id={id}>
      <iframe id="Sitepal-Iframe" src="./sitepal3.html" datain={response} dataout="DATA OUT"></iframe>
      <p>{response}</p>
      
      <form onSubmit={handleSubmit}>
        
        <label>
          <input type="text" style={{margin:"auto",width:"80%"}} value={bearerSubmission} onChange={e => setBearerSubmission(e.target.value)} />
        </label>
        <div id ="bearer"><p>BEARER ID: {bearerSubmission}</p>   </div>

        {/*}
        <label>
          <input type="text" style={{margin:"auto",width:"100%"}} value={modelSubmission} onChange={e => setModelSubmission(e.target.value)} />
        </label>
        <div id ="model"><p>MODEL: {modelSubmission}</p>   </div>
        */}
        
        <h3>  TYPE IN YOUR REQUEST</h3>
        <label>
          <div>Prompt:</div>
          <input type="text" style={{margin:"auto",width:"80%"}} value={promptSubmission} onChange={e => setPromptSubmission(e.target.value)} />
        </label>
        <div id ="prompt"><p>PROMPT SUBMISSION: {promptSubmission}</p>   </div>
        <button type="submit">Submit</button>
        
      </form>
            
      
      

    </div>
  );
}

export default GPT3API;