import React from 'react';

function Counter(props){

  return(
    <>
      <div className="card-header">Attempts</div>
      <div className="card-body lead display-2">
        <span className="badge badge-pill badge-dark">
          { props.attempts }
        </span>
      </div>
    </>
  );
}

export default Counter;
