import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from "../../components/Table/index.tsx";
import reducerUser from "../../redux/ReducerUsers.tsx";
import { deleteUser, getListUsers } from "../../redux/userSlice.tsx";


type Props = {};

function ListUser(props: Props) {

  const usersList = useSelector((state: any) => state.users.items)
  const dispatch = useDispatch();

  const handdleRemove = (id) => {
    // reducerUser(id);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/users",
    }).then(function (response) {
      dispatch(getListUsers(response.data));
    });
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
