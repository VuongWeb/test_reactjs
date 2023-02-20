import React from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { TUser } from "../../models/users";
import { deleteUser } from "../../redux/userSlice.tsx";


type Props = {
  users: TUser[];
};

const Table = (props: Props) => {
  const { users } = props;
  const dispatch = useDispatch();


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
        {users &&
          users.map((item: TUser, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>
                  <Link
                    className="bg-blue-600 py-3 px-5 text-white rounded-[15px] mx-3"
                    to={`/users/edit/${item.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-600 py-3 px-5 text-white rounded-[15px]"
                    onClick={() => {
                      if (window.confirm("bạn chắc chắn xóa !")) {
                       dispatch(deleteUser(item.id))
                      }
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
