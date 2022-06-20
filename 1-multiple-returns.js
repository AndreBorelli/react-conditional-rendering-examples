// In this small example, we have to be aware of the fact that a function can only have several returns if 
// conditioning is used, otherwise the function will only return the first return. In this project we have
// three useStates, the first being isLoading that starts with True and is changed to false after the API 
// fetch response. In one of the conditionings, this state is responsible for showing an html page while its 
// value is true The second isError, starts with false and becomes true if the request response is not between
// 200 and 299, that is, successful fetch responses , showing an html conditioned by if if this value is true. 
// And the third useState is that of the user that serves to receive the value from the API and show if isLoading
// and isError are simultaneously false.


import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
