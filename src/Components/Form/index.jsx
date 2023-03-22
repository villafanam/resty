import React, { useState } from 'react';

import './Form.scss';

//url: 'https://pokeapi.co/api/v2/pokemon',

const Form = (props) => {

const [ url, setUrl ] = useState('');
const [ method, setMethod] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };

    if(e.target.postContent.value)
    {
      formData.data = JSON.parse(e.target.postContent.value);
    }

    console.log('formData: ', formData)

    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get"data-testid="getBtn" onClick={() => setMethod('GET')}>GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
        <textarea  name="postContent" rows={4} cols={40}/>
      </form>
    </>
  );
};

export default Form;
