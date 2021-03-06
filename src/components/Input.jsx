import "./Input.css";
import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { TodoContext } from "../App";

const Input = () => {
  const todo = useContext(TodoContext);

  const [formData, setFormData] = useState({
    title: "",
    note: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    todo.dispatch({
      type: "add",
      payload: {
        ...formData,
        id: nanoid(),
        finish: false,
      },
    });

    setFormData({
      title: "",
      note: "",
    });
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Add Todo</h1>
      <div>
        <label htmlFor='title'>Title</label>
        <br />
        <input
          className='form-input'
          type='text'
          name='title'
          value={formData.title}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor='note'>Note</label>
        <br />
        <textarea
          className='form-input'
          name='note'
          cols='30'
          rows='10'
          value={formData.note}
          onChange={onChange}
          required
        ></textarea>
      </div>
      <button className='button' type='submit'>
        SUBMIT
      </button>
    </form>
  );
};

export default Input;
