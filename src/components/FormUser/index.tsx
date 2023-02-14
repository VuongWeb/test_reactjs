import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  const params = useParams();
  const navigate = useNavigate();

  const onHandleSubmit: SubmitHandler<TUser> = (user) => {
    if (propsForm.key == "add") {
      axios
        .post("http://localhost:8000/users", user)
        .then(function (response) {
          toast.success("thêm thành công !");
          setTimeout(() => {
            navigate("/users");
          }, 1000);
        })
        .catch(function (error) {
          toast.error("thêm thất bại !");
        });
    } else if (propsForm.key == "edit") {
      const id = params.id;
      axios
        .put(`http://localhost:8000/users/${id}`, user)
        .then(function (response) {
          toast.success("sửa thành công !");
          setTimeout(() => {
            navigate("/users");
          }, 1000);
        })
        .catch(function (error) {
          toast.error("sửa thất bại !");
        });
    }
  };

  useEffect(() => {
    if (params.id) {
      const id = params.id;
      axios
        .get(`http://localhost:8000/users/${id}`)
        .then(function (response) {
          reset(response.data);
          console.log("sửa ok");
        })
        .catch(function (error) {
          console.log("sửa lỗi");
        });
    }
  }, []);

  return (

    // thieu validate 
    <>
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
                  {...register(`${item}`, { required: true })}
                  name={item}
                  type="text"
                  className="p-3 mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {errors[item] && errors[item]?.type === 'required' && <span className="text-red-600">
                  is required !
                </span>}
              </div>
            );
          })}
        <button className="bg-blue-600 text-white px-5 py-3 rounded-[15px]">
          Add User
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
