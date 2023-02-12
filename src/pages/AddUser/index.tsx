import React from "react";
import Form from "../../components/FormUser/index.tsx";

type Props = {};

const AddUser = (props: Props) => {
  const propsForm = {
    key : "add",
    input: ["name", "phoneNumber", "email"],
  };

  return (
    <div>
      AddUser
      <Form propsForm={propsForm} />
    </div>
  );
};

export default AddUser;
