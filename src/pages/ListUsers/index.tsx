import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/index.tsx";
import { TUser } from "../../models/users";

type Props = {};

function ListUser(props: Props) {
  const [users, setUsers] = useState<TUser[]>([]);

  const handdleRemove = (id) => {
    axios
        .delete(`http://localhost:3000/users/${id}`)
        .then(function (response) {
            setUsers(users.filter(item => item.id !== id))          
        })
        .catch(function (error) {
        });
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then(function (response) {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <h2>ListUser</h2>
      <button>
        <Link to={`/users/add`}>Add</Link>
      </button>
      <Table users={users} action={handdleRemove} />
      {/* <Pagition /> */}
    </div>
  );
}

export default ListUser;
