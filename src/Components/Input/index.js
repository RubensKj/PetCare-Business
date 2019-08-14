import React from 'react';

import './styles.css';

export default function Input({ type, value, name, placeholder, messageBottom, onChange, autoComplete }) {
  return (
    <div className="input-area">
      <div className="input-div inputed">
        <input className="input-basic" type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} autoComplete={autoComplete} />
      </div>
      <span>{messageBottom}</span>
    </div>
  );
}
