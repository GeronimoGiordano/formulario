import React from "react";
import { ErrorMessage, useField, Field } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export const TypeSelector = () => {
  return (
    <div>
      <label htmlFor="docType">Tipo de Documento</label>
      <select
        style={{ background: "#f0f0ff" }}
        className="form-control shadow-none"
        id="docType"
        name="doc"
      >
        <option value="DNI">Documento Nacional de Identidad</option>
        <option value="LE">Libreta de Enrolamiento</option>
        <option value="CI">Cédula de Identidad</option>
        <option value="LC">Libreta Cívica</option>
      </select>
    </div>
  );
};
