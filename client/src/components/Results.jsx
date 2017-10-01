import React from 'react';
import Picture from './Picture';

const Results = (props) => {
  if (props.results.data) {
    return (
      <div>
        {props.results.data.map((picture, idx) => 
          <Picture id={idx} picture={picture}/>
        )}
      </div>
    );    
  } else {
    return ( <div>Enter an address to see some images</div>);
  }
}

export default Results;
