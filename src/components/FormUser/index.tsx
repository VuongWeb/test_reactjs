import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser } from "../../redux/userSlice.tsx";

type Props = {
  propsForm: any;
};

const Form = (props: Props) => {
  const { propsForm } = props;
  const dispatch = useDispatch();

  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')


  const params = useParams();
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (propsForm.key == "add") {
      dispatch(addUser({
        name,phoneNumber,email
      }))
      navigate('/users')
    } else if (propsForm.key == "edit") {

      
    }
  };

  useEffect(() => {
    // if (params.id) {
    //   const id = params.id;
    //   axios
    //     .get(`http://localhost:8000/users/${id}`)
    //     .then(function (response) {
    //     })
    //     .catch(function (error) {
    //       console.log("sửa lỗi");
    //     });
    // }
  }, []);

  return (

    // thieu validate 
    <>
      <form
        action=""
        className="w-80 mx-auto"
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
                  name={item}
                  type="text"
                  onChange={(e: any) => {
                    if(item == 'name'){
                      setName(e.target.value)
                    }else if(item == 'email'){
                      setEmail(e.target.value)
                    }else if(item == 'phoneNumber'){
                      setPhoneNumber(e.target.value)
                    }
                  }}
                  className="p-3 mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            );
          })}
        <button className="bg-blue-600 text-white px-5 py-3 rounded-[15px]" onClick={onHandleSubmit}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
