import React from "react";
import { Button, Form, Input } from "antd";
import "../../styles/forms.css";
const MyFormItemContext = React.createContext([]);

function toArr(str) {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );
  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};
const MyFormItem = ({ name, ...props }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName =
    name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const UserForm = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [newUser, setNewUser] = React.useState({});

  const handleSubmit = () => {
    console.log("<<= check state submit =>>", {
      fullname,
      email,
      password,
      phone,
    });
  };

  return (
    <div className="user-form-container">
      <div className="user-form-card">
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
          <MyFormItemGroup prefix={["userCreated"]}>
            <MyFormItem
              name="fullname"
              label="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            >
              <Input />
            </MyFormItem>
            <MyFormItem
              name="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Input />
            </MyFormItem>
            <MyFormItem
              name="phone"
              label="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            >
              <Input />
            </MyFormItem>

            <MyFormItem
              name="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <Input.Password />
            </MyFormItem>
          </MyFormItemGroup>
          <div className="user-form-actions">
            <Button type="primary" htmlType="submit">
              Created User
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default UserForm;
