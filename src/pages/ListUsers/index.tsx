import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from "../../components/Table/index.tsx";
import reducerUser from "../../redux/ReducerUsers.tsx";
<<<<<<< HEAD
import { deleteUser, listUsers } from "../../redux/userSlice.tsx";
=======
import { deleteUser, getListUsers } from "../../redux/userSlice.tsx";
>>>>>>> 879126c27e3087b6f7cdd8ad437b96c7be7edd83


type Props = {};

function ListUser(props: Props) {
<<<<<<< HEAD
  const usersList = useSelector((state: any) => state.users.items);
=======
>>>>>>> 879126c27e3087b6f7cdd8ad437b96c7be7edd83

  const usersList = useSelector((state: any) => state.users.items)
  const dispatch = useDispatch();

  const handdleRemove = (id) => {
    // reducerUser(id);
  };

  useEffect(() => {
<<<<<<< HEAD
    axios.get(' http://localhost:8000/users')
      .then(function (response) {
        dispatch(reducerUser(response.data,{type:"GET",payload:response.data}))
      })
      .catch(function (error) {
        console.log('err get', error);
      });
=======
    axios({
      method: "get",
      url: "http://localhost:8000/users",
    }).then(function (response) {
      dispatch(getListUsers(response.data));
    });
>>>>>>> 879126c27e3087b6f7cdd8ad437b96c7be7edd83
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <h2 className="text-[30px] py-[20px] font-[600]"> ListUser</h2>
      <button className="float-right bg-green-600 py-3 px-5 text-white rounded-[15px]">
        <Link to={`/users/add`}>Add</Link>
      </button>
      <Table users={usersList} action={handdleRemove} />
      <ToastContainer />
    </div>
  );
}

export default ListUser;
