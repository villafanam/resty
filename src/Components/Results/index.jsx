import React from 'react';
import JSONPretty from 'react-json-pretty';


//<pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
const Results = (props) => {
  const { data } = props;
  let JSONPrettyMon = require('react-json-pretty/dist/monikai');
  //console.log('data: ', data);

  return (
    <section>
      {props.loading
        ? <div>Loading...</div>
        : data
          ? <JSONPretty data={data} theme={JSONPrettyMon}></JSONPretty>
          : null
      }


    </section>
  );
};

export default Results;
