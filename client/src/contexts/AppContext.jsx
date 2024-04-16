import axios from "axios";
import React from "react";

import { useContext, createContext, useReducer, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const initialState = {
  _id: "",
  userName: "",
  isLoggedIn: false,
};

const UserReducer = (state, action) => {
  console.log("state:", state);
  console.log("action:", action);
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
      let newState = action.value;
      return {
        ...newState,
        isLoggedIn: true,
      };
    default:
      break;
  }
  return state;
};

const AppContextProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(UserReducer, initialState);

  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    try {
      const res = await axios.get("http://localhost:4000/posts/");
      let data = await res.data;
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setQuotes(data);
    } catch (error) {
      console.log("Error fetching quotes", error);
    }
  };

  return (
    <AppContext.Provider
      value={{ userState, dispatchUser, fetchQuotes, quotes }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
