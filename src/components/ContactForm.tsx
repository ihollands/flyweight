import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import data from '@/data/default';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(data.contact_form.id);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
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
      el: 'email',
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
      className="border border-black/30 p-4"
    >
      {formFields.map(({ el, label, props }) => {
        const inputEl = React.createElement(el, { ...props });

        return (
          <div key={props.id}>
            <label htmlFor={props.id}>{label}</label>
            {inputEl}
            <ValidationError
              prefix={label}
              field={props.id}
              errors={state.errors}
            />
          </div>
        );
      })}
      <button
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
