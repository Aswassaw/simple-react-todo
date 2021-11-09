import "./Input.css";
import React, { useState } from "react";

const Input = () => {
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

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
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
    </div>
  );
};

export default Input;
