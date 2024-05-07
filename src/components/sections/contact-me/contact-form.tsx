import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORM_API);
  return (
    <form
      className="flex flex-col w-[350px] gap-2 m-auto sm:ml-0 sm:mr-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="block mb-2 text-base font-medium text-zinc-800 dark:text-zinc-100"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-md focus:ring-lime-500 focus:border-lime-500 block w-full p-2 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-zinc-50 dark:focus:ring-lime-500 dark:focus:border-lime-500 focus:outline-none"
          placeholder="your@email.com"
          required
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="block mb-2 text-base font-medium text-zinc-800 dark:text-zinc-100"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="resize-none h-20 bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-md focus:ring-lime-500 focus:border-lime-500 block w-full p-2 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-zinc-50 dark:focus:ring-lime-500 dark:focus:border-lime-500 focus:outline-none"
          placeholder="Your message goes here"
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className="align-middle font-semibold w-full h-fit p-2 rounded-md bg-lime-500 hover:bg-lime-400 text-zinc-100 dark:text-zinc-800 transition-all"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
};
