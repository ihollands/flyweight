import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import data from '@/data/default';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(data.contact_form.id);

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
      label: 'Title',
      props: {
        id: 'title',
        type: 'text',
        name: 'title',
      },
    },
    {
      el: 'input',
      label: 'Company',
      props: {
        id: 'company',
        type: 'text',
        name: 'company',
      },
    },
    {
      el: 'input',
      label: 'Website / LinkedIn',
      props: {
        id: 'link',
        type: 'text',
        name: 'link',
      },
    },
    {
      el: 'input',
      label: 'Phone Number',
      props: {
        id: 'phone',
        type: 'text',
        name: 'phone',
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
      label: 'How did you hear about us?',
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
