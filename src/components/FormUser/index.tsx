import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { TUser } from "../../models/users";

type Props = {
  propsForm: any;
};

const Form = (props: Props) => {
  const { propsForm } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm();

  const onHandleSubmit: SubmitHandler<TUser> = (user) => {
    if (propsForm.key == "add") {
      console.log(user);
    }
  };

  return (
    <form
      action=""
      className="w-80 mx-auto"
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      {propsForm &&
        propsForm.input.map((item, i) => {
          return (
            <div className="col-span-6 sm:col-span-3 my-4" key={i}>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                {item}
              </label>
              <input
                {...register(item)}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="p-3 mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          );
        })}
      <button className="bg-blue-600 text-white px-5 py-3 rounded-[15px]">
        Add User
      </button>
    </form>
  );
};

export default Form;
