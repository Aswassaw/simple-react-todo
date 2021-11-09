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
    id: "8s2go8e5s3",
    title: "Todo Satu",
    note: "Ini adalah todo 1",
    finish: false,
  },
];
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add":
      return [...state, payload];
    case "delete":
      return state.filter((stt) => stt.id !== payload);
    case "finish":
      return state.map((stt) => {
        if (stt.id === payload) {
          return {
            ...stt,
            finish: !stt.finish,
          };
        }

        return stt;
      });
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
