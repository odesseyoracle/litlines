import React from "react";

import { useContext, createContext, useReducer } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const initialState = {
  _id: "",
  userName: "",
  isLoggedIn: false,
};

const UserReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        [action.field]: action.value,
        isLoggedIn: true,
      };
    case "logout":
      return { ...initialState };
    case "fetch-user-data":
      const newState = action.value;
      return {
        ...newState,
        isLoggedIn: true,
      };
      defalt: break;
  }
  return state;
};

const AppContextProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(UserReducer, initialState);

  return (
    <AppContextProvider value={{ userState, dispatchUser }}>
      {children}
    </AppContextProvider>
  );
};

export default AppContextProvider;
