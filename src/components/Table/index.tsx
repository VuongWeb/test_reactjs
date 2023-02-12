import React from "react";
import { Link } from "react-router-dom";
import { TUser } from "../../models/users";

type Props = {
  users: [];
};

const Table = (props: Props) => {
  const { users } = props;
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
        {users &&  users.map((item: TUser, i) => {
          return (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.email}</td>
              <td>
                <Link to={``}>Edit</Link>
              </td>
              <td>
                <div>Remove</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
