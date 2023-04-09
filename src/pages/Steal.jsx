import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import Header from "../components/Header";

export default function Steal() {
  const navigate = useNavigate();

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Необходимо указать почту"),

    password: Yup.string()
      .required("Необходимо указать пароль")
      .min(6, "пароль слишком короткий"),
  });

  const initialValues = {
    license: "",
    fio: "",
    type: "",
    color: "",
    date: "",
    info: "",
  };

  const onSubmit = (values) => {
    // mutate(values, {
    //   onSuccess: (response) => {
    //     navigate("/");
    //   },
    //   onError: (response) => {
    //     alert("Произошла ошибка");
    //   },
    // });
  };

  //   const { mutate } = useMutation({
  //     mutationFn: (formPayload) => {
  //       return axios.post("https://api", formPayload);
  //     },
  //   });
  //номер лицензии фио клиента тип велосипеда-выпад список цвет велосипеда дата кражи дополнительная информация
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="formContainer steal__form">
            <div className="formWrapper">
              <Header />

              <span className="menu__link">Сообщите о краже</span>
              <Form>
                <Field
                  type="text"
                  name="license"
                  id="license"
                  placeholder="Номер лицензии"
                  className={
                    errors.license && touched.license ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="license"
                  component="span"
                  className="error"
                />
                <Field
                  type="text"
                  name="fio"
                  id="fio"
                  placeholder="ФИО"
                  className={errors.fio && touched.fio ? "input-error" : null}
                />
                <ErrorMessage name="fio" component="span" className="error" />
                <Field
                  type="text"
                  name="type"
                  id="type"
                  placeholder="Тип велосипеда"
                  className={errors.type && touched.type ? "input-error" : null}
                />
                <ErrorMessage name="type" component="span" className="error" />
                <Field
                  type="text"
                  name="color"
                  id="color"
                  placeholder="Цвет велосипеда"
                  className={
                    errors.color && touched.color ? "input-error" : null
                  }
                />
                <ErrorMessage name="color" component="span" className="error" />
                <Field
                  type="text"
                  name="date"
                  id="date"
                  placeholder="Дата кражи"
                  className={errors.date && touched.date ? "input-error" : null}
                />
                <ErrorMessage name="date" component="span" className="error" />
                <Field
                  type="text"
                  name="info"
                  id="info"
                  placeholder="Дополнительная информация"
                  className={errors.info && touched.info ? "input-error" : null}
                />
                <ErrorMessage name="info" component="span" className="error" />
                <button
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                >
                  Сообщить
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
