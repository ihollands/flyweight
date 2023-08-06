import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import data from '@/data/default';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(data.creative_contact.form.id);

  if (state.succeeded) {
    return (
      <>
        <h1 className="text-2xl">Thanks for reaching out.</h1>
        <p className="text-base">Check your email. Our managing director will reach out shortly.</p>
      </>
    );
  }

  const formFields = [
    {
      el: 'input',
      label: 'Name',
      props: {
        id: 'name',
        type: 'text',
        name: 'name',
      },
    },
    {
      el: 'input',
      label: 'Website / Portfolio / LinkedIn',
      props: {
        id: 'link',
        type: 'text',
        name: 'link',
      },
    },
    {
      el: 'input',
      label: 'Email Address',
      props: {
        id: 'email',
        type: 'text',
        name: 'email',
      },
    },
    {
      el: 'textarea',
      label: 'Message',
      props: {
        id: 'message',
        type: 'text',
        name: 'message',
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      style={{ width: 'calc(100v - 8rem)' }}
    >
      {formFields.map(({ el, label, props }) => {
        const inputEl = React.createElement(el, { ...props });

        return (
          <div
            key={props.id}
            className="form-field"
          >
            <label htmlFor={props.id}>{label}:</label>
            {inputEl}
            <ValidationError
              prefix={label}
              field={props.id}
              errors={state.errors}
            />
          </div>
        );
      })}
      <div className="pt-4">
        <button
          className="btn-light"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
