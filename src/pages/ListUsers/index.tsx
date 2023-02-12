import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../components/Table/index.tsx";
import { TUser } from "../../models/users";

type Props = {};

function ListUser(props: Props) {
  const [users, setUsers] = useState<TUser[]>([]);

  console.log(users);

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
      <Table users={users}/>
      {/* <Pagition /> */}
    </div>
  );
}

export default ListUser;
