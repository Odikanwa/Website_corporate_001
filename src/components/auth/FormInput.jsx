import React, { FC } from 'react';
import PropTypes from 'prop-types';

  
export default FormInput = ({
    name,
    label,
    type,
    attribute,
    full = true,
    register,
    errors,
    // onChange,
    ...attrs
  }) => {
    return (
      <div className={`mb-3 mt-4 text-left text-secondary ${attribute}`}>
        <label htmlFor={label} className="form-label">{label}</label>
        <input
          type={type}
          {...attrs}
          {...register(name)}
          placeholder={label}
          name={name}
          className={`form-control input-field text-dark ${attribute}`}
        />
        {errors[name] && (
          <span className="text-red-500 pt-2">{errors[name].message}</span>
        )}
      </div>
    );
  };