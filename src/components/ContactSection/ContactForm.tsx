'use client';
import {useForm, ValidationError} from '@formspree/react';
import {motion} from 'framer-motion';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xgegdwjk');

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          Thank you for your message!
        </h3>
        <p className="text-green-600">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="button-primary w-full">
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
