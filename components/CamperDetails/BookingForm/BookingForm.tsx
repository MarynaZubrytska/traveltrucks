'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import css from './BookingForm.module.css';

type Props = { camperName: string };

const schema = Yup.object({
  name: Yup.string().trim().required('Name is required'),
  email: Yup.string()
    .trim()
    .email('Invalid email')
    .required('Email is required'),
  bookingDate: Yup.date().nullable().required('Date is required'),
  comment: Yup.string(),
});

export default function BookingForm({ camperName }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  return (
    <section className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          toast.success(`Excellent choice! Your request for "${camperName}" has been sent. We'll contact you soon!`);
          resetForm();
        }}
      >
        {({ values, errors, touched, setFieldValue, setFieldTouched }) => (
          <Form className={css.form} noValidate>
            <div className={css.inputsGap}>
              <Field
                name="name"
                placeholder="Name*"
                className={`${css.input} ${errors.name && touched.name ? css.inputError : ''}`}
              />

              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={`${css.input} ${errors.email && touched.email ? css.inputError : ''}`}
              />

              <div className={css.dateWrapper}>
                <DatePicker
                  selected={values.bookingDate}
                  onChange={(date: Date | null) => {
                    setFieldValue('bookingDate', date);
                    setIsFocused(false);
                  }}
                  onBlur={() => {
                    setFieldTouched('bookingDate', true);
                    setIsFocused(false);
                  }}
                  onFocus={() => setIsFocused(true)}
                  placeholderText={
                    isFocused ? 'Select a date between today' : 'Booking date*'
                  }
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
                  className={`${css.input} ${errors.bookingDate && touched.bookingDate ? css.inputError : ''}`}
                  calendarClassName={css.customCalendar}
                />
              </div>

              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
            </div>

            <button type="submit" className={css.submitBtn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
