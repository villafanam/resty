import React, { useState } from 'react';

import './Form.scss';

const Form = (props) => {

  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };

    if (e.target.postContent.value) {
      formData.data = JSON.parse(e.target.postContent.value);
    }

    //console.log('formData: ', formData)
    props.handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input data-testid="url-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)} />
          <button data-testid="button" type="submit">GO!</button>
        </label>
        
        <label className="methods">
          <span
            id="get"
            data-testid="get-span"
            style={{ backgroundColor: method === 'GET' ? '#f51800' : '#fbe89d' }}
            onClick={(e) => setMethod(e.target.innerText)}
          >GET</span>

          <span 
          id="post" 
          style={{ backgroundColor: method === 'POST' ? '#f51800' : '#fbe89d' }} 
          onClick={(e) => setMethod(e.target.innerText)}
          >POST</span>

          <span 
          id="put" 
          style={{ backgroundColor: method === 'PUT' ? '#f51800' : '#fbe89d' }} 
          onClick={(e) => setMethod(e.target.innerText)}
          >PUT</span>

          <span 
          id="delete" 
          style={{ backgroundColor: method === 'DELETE' ? '#f51800' : '#fbe89d' }} 
          onClick={(e) => setMethod(e.target.innerText)}
          >DELETE</span>

        </label>

        <label htmlFor="postContent">JSON DATA
          <textarea name="postContent" rows={4} cols={40} />
        </label>

      </form>
    </>
  );
};

export default Form;
