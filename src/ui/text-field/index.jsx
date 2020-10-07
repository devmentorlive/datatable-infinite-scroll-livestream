import React from 'react';
import './styles.css';

export default function TextField({
  value,
  onChange,
  placeholder,
  label,
}) {
  return (
    <input
      className='__dml_text-field'
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value, e)}
    />
  );
}
