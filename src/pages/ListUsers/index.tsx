import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from "../../components/Table/index.tsx";
import { TUser } from "../../models/users";

type Props = {};

function ListUser(props: Props) {
  const [users, setUsers] = useState<TUser[]>([]);

  const handdleRemove = (id) => {
    axios
        .delete(`http://localhost:8000/users/${id}`)
        .then(function (response) {
            setUsers(users.filter(item => item.id !== id))     
            toast.success('xóa thành công!')     
        })
        .catch(function (error) {
          toast.error('xóa thất bại!')     
        });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/users",
    }).then(function (response) {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <h2 className="text-[30px] py-[20px] font-[600]"> ListUser</h2>
      <button className="float-right bg-green-600 py-3 px-5 text-white rounded-[15px]">
        <Link to={`/users/add`}>Add</Link>
      </button>
      <Table users={users} action={handdleRemove} />
      {/* <Pagition /> */}
      <ToastContainer />
    </div>
  );
}

export default ListUser;
