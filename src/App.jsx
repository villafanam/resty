import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [],
};

// example action:
// {
//   type: 'ADD'
//   payload: 'Cookie Monster' 
// }

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setData':
      return { ...state, data: action.payload };
    case 'setRequestParams':
      return { ...state, requestParams: action.payload };
    case 'setLoading':
      return { ...state, loading: action.payload };
    case 'setHistory':
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};


const App = () => {

  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const callApi = (requestParamsForm) => {
    // setRequestParams(requestParamsForm);
    let action = {
      type: 'setRequestParams',
      payload: requestParamsForm,
    };
    dispatch(action);
  };

  const showHistory = (entry) => {
    let action = {
      type: 'setData',
      payload: entry.results,
    };
    dispatch(action);
  };


  useEffect(() => {

    console.log('Request Params received');

    async function getData() {
      if (state.requestParams.method && state.requestParams.url) {
        // setLoading(true);
        let action = {
          type: 'setLoading',
          payload: true,
        };
        dispatch(action);

        let axiosData = await axios(state.requestParams);

        // setData(axiosData.data);
        dispatch({
          type: 'setData',
          payload: axiosData.data,
        });

        let historyEntry = {
          method: state.requestParams.method,
          url: state.requestParams.url,
          results: axiosData.data,
        };
        dispatch({
          type: 'setHistory',
          payload: historyEntry,
        });
        console.log('historyEntry: ', historyEntry);

        //setLoading(false);
        dispatch({
          type: 'setLoading',
          payload: false,
        });
      }
    }

    getData();
  }, [state.requestParams]);

  return (
    <React.Fragment>
      <Header />
      {/* <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div> */}
      <History history={state.history} showHistory={showHistory} />
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <Footer />
    </React.Fragment>
  );

};

export default App;
