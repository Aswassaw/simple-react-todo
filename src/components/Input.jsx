import "./Input.css";
import React from "react";

const Input = () => {
  const onChange = () => {};

  const onSubmit = () => {};

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div>
          <label htmlFor='name'>Name</label>
          <br />
          <input className="form-input" type='text' name='name' onChange={onChange} />
        </div>
        <div>
          <label htmlFor='note'>Note</label>
          <br />
          <textarea
          className="form-input"
            name='note'
            cols='30'
            rows='10'
            onChange={onChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Input;
