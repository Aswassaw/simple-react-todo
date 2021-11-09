import "./Todo.css";
import React, { Fragment, useContext } from "react";
import { TodoContext } from "../App";

const TodoList = () => {
  const todo = useContext(TodoContext);

  const onDelete = (id) => {
    todo.dispatch({
      type: "delete",
      payload: id,
    });
  };

  const onFinish = (id) => {
    todo.dispatch({
      type: "finish",
      payload: id,
    });
  };

  return (
    <div className='todo'>
      {/* Todo Ongoing */}
      <div className='todo-ongoing'>
        <p className='todo-title'>Ongoing</p>
        <hr />
        <div className='todo-container'>
          {todo.state.map((dt) => (
            <Fragment key={dt.id}>
              {!dt.finish && (
                <div className='todo-list'>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    {dt.title}
                  </p>
                  <p>{dt.note}</p>
                  <button
                    className='todo-button'
                    onClick={() => onDelete(dt.id)}
                  >
                    Delete
                  </button>
                  <button
                    className='todo-button'
                    onClick={() => onFinish(dt.id)}
                  >
                    Finish
                  </button>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      {/* Todo Finish */}
      <div className='todo-finish'>
        <p className='todo-title'>Finish</p>
        <hr />
        <div className='todo-container'>
          {todo.state.map((dt) => (
            <Fragment key={dt.id}>
              {dt.finish && (
                <div className='todo-list' key={dt.id}>
                  <p
                    style={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    {dt.title}
                  </p>
                  <p>{dt.note}</p>
                  <button
                    className='todo-button'
                    onClick={() => onDelete(dt.id)}
                  >
                    Delete
                  </button>
                  <button
                    className='todo-button'
                    onClick={() => onFinish(dt.id)}
                  >
                    Ongoing
                  </button>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
