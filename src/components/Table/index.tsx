import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TUser } from "../../models/users";

type Props = {
  users: TUser[];
};

const Table = (props: Props) => {
  const { users } = props;

  const [list, setList] = useState<TUser[]>();
  setList(users);

  const hanleRemove = (id: any) => {
    axios
      .delete(`http://localhost:3000/users/${id}`)
      .then(function (response) {
        // setList(
        //   list?.filter(item => item.id !== id)
        // );
      })
      .catch(function (error) {
        console.log("xóa lỗi");
      });
  };

  // useEffect(() => {}, [list]);

  return (
    <table className="table-auto mx-auto text-center">
      <thead>
        <tr>
          <th className="px-12 py-5">Name</th>
          <th className="px-12 py-5">Phone</th>
          <th className="px-12 py-5">Email</th>
          <th className="px-12 py-5">Action</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.map((item: TUser, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/users/edit/${item.id}`}>Edit</Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      hanleRemove(item.id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
