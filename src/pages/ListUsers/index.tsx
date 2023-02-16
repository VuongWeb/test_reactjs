import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from "../../components/Table/index.tsx";
import reducerUser from "../../redux/ReducerUsers.tsx";
import { deleteUser, listUsers } from "../../redux/userSlice.tsx";


type Props = {};

function ListUser(props: Props) {
  const usersList = useSelector((state: any) => state.users.items);

  const dispatch = useDispatch();

  const handdleRemove = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    axios.get(' http://localhost:8000/users')
      .then(function (response) {
        dispatch(reducerUser(response.data,{type:"GET",payload:response.data}))
      })
      .catch(function (error) {
        console.log('err get', error);
      });
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <h2 className="text-[30px] py-[20px] font-[600]"> ListUser</h2>
      <button className="float-right bg-green-600 py-3 px-5 text-white rounded-[15px]">
        <Link to={`/users/add`}>Add</Link>
      </button>
      <Table users={usersList} action={handdleRemove} />
      {/* <Pagition /> */}
      <ToastContainer />
    </div>
  );
}

export default ListUser;
