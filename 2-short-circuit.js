// Course project in which short circuit evaluation is taught, which is basically using the AND (&&) or OR 
// (||) commands to determine the conditioning of a function. In the case of && the second parameter will only
//  be TRUE if the first one is TRUE, and in the case of || the second parameter will only be TRUE if the first 
//  one is FALSE. We also have the ternary operators where we can give two different answers to the same 
//  conditioning, using the ? then the answer if it is TRUE then : and then the element we want to be false. 
//  Remembering that we can always use the ! before the variable inverting from true to false or vice versa.



import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* {if(){console.log('hello world')}} */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
