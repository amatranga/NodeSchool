import React from 'react';
import Picture from './Picture';

const Results = (props) => {
  return (
    <div>
      {props.results.map((picture, idx) => 
        <Picture id={idx} picture={picture}/>
      )}
    </div>
  );    
}

export default Results;
