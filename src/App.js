import "./App.css";
import { Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import TodoList from "./components/Todo";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Input />
          <TodoList />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
