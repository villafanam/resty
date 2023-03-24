import React from 'react';
import './History.scss'

const History = (props) => {
  return (
    <>
      {
        props.history.map( (entry, idx) => ( 
        <div className='entrys' key={`entry-${idx}`} onClick={ () => props.showHistory(entry) }>
            {entry.method} - {entry.url}
          </div>
          ))
      }
    </>
  );
};

export default History;