import React, { useState } from 'react';

const GeneralContext = React.createContext();
let { Provider, Consumer } = GeneralContext;

const GeneralProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Enrique',
    currentBalance: 10000
  });
  const updateUser = (value) => setUser(value);
  return (
    <Provider
      value={{
        user,
        updateUser,
      }}>
      { children }
    </Provider>
  )
};

export { GeneralProvider, Consumer as GeneralConsumer, GeneralContext };
