import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <form action="">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700"
        >
          First name
        </label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </form>
  );
};

export default Form;
