import React from "react";
import Form from "../../components/FormUser/index.tsx";

type Props = {};

const EditUser = (props: Props) => {
  const propsForm = {
    key: "edit",
    input: ["name", "phoneNumber", "email"],
  };
  return (
    <div>
      <Form propsForm={propsForm} />
    </div>
  );
};

export default EditUser;
