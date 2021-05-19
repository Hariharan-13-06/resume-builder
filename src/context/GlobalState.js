import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  resume: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteResume(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function addResume(resume) {
    dispatch({
      type: 'CREATE',
      payload: resume
    });
  }

  

  return (<GlobalContext.Provider value={{
    resume: state.resume,
    addResume,
    deleteResume

  }}>
    {children}
  </GlobalContext.Provider>);
}