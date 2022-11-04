import React from "react";
import { Formik, Form } from "formik";
import { TextField, TypeSelector } from "./TextField";
import * as Yup from "yup";

export const Signup = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Ingresa un nombre válido")
      .max(15, "Debe ser 15 caracteres o menos")
      .min(3, "Debe ser más de 3 caracteres")
      .required("Ingrese su nombre"),
    lastName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Ingresa un apellido válido")
      .max(20, "Must be 20 characters or less")
      .min(3, "Must be more than 3 characters")
      .required("Ingrese apellido"),
    city: Yup.string()
      .min(3, "Debe ser más de 3 caracteres")
      .required("Ingrese su ciudad"),
    email: Yup.string().email("Mail inválido").required("Mail requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe ser mínimo 6 carácteres")
      .required("Contraseña requerida"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Confirmación de contraseña requerida"),
    bornDate: Yup.date()
      .max(new Date(), "Elige una fecha anterior a hoy")
      .required("Ingrese su fecha de nacimiento"),
    docNumber: Yup.number()
      .max(99999999)
      .min(1000000)
      .required("Ingresa tu número de documento"),
    cellphone: Yup.string()
      .matches(phoneRegExp, "Número de teléfono no válido")
      .required("Ingrese un número de teléfono"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        cellphone: "",
        city: "",
        bornDate: "",
        docType: "",
        docNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
            <Form>
              <TextField label="Nombre" name="firstName" type="text" />
              <TextField label="Apellido" name="lastName" type="text" />
              <TextField label="Celular" name="cellphone" type="number" />
              <TextField label="Ciudad" name="city" type="string" />
              <TextField
                label="Fecha de Nacimiento"
                name="bornDate"
                type="date"
                max={new Date().toJSON().slice(0, 10)}
              />
              <TypeSelector />
              <TextField
                label="Numero de Documento"
                name="docNumber"
                type="text"
              />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              <TextField
                label="Confirmar Password"
                name="confirmPassword"
                type="password"
              />

              <button className="btn btn-dark mt-3" type="submit">
                Register
              </button>
              <button className="btn btn-danger mt-3 ml-3" type="reset">
                Borrar Todo
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
