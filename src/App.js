import "./App.css";
import React, { createContext, useReducer } from "react";
import { Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import TodoList from "./components/Todo";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

export const TodoContext = createContext();

const initialState = [
  {
    id: 1,
    title: "Todo Satu",
    note: "Ini adalah todo 1",
    finish: false,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return initialState;
    case "delete":
      return initialState;
    case "finish":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, initialState);

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
