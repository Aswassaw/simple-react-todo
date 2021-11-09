import "./App.css";
import React, { createContext, useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import TodoList from "./components/Todo";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { useState } from "react";

export const TodoContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return initialState;
    case "delete":
      return initialState;
    case "finish":
      return 0;
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useState(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state: todo, dispatch }}>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Input />
          <TodoList />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </TodoContext.Provider>
  );
}

export default App;
