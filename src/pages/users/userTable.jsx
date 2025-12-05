import React from "react";
import { Space, Table} from "antd";
import '../../styles/table.css';
import { fetchAllUsersApi } from "../../services/api.service";

const UserTable = () => {
  // Dummy data user
  const [dataUser, setDataUsers] = React.useState([
    {_id: '1', fullName: 'User Test', email: 'abc@gmail.com', phone: '0123456789'},
    {_id: '2', fullName: 'User Demo', email: 'asdas@gmail.com', phone: '0987654321'},
  ]);

  //empty array dependency to run useEffect only 1 time when component mounted
  React.useEffect(() => {
    console.log("Run useEffect");
    loadDataUserAllAPI();
  }, []);

  // Define columns for Ant Design Table
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Fullname",
      dataIndex: "fullName",
      key: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  // Function load data user all from API
  const loadDataUserAllAPI = async () => {
    // Call API load data user all
    console.log("Run load user all START >>>");
    const res = await fetchAllUsersApi();
    setDataUsers(res.data);
    console.log("Data user END >>>");
  };

  
  return <Table columns={columns} dataSource={dataUser} 
          rowKey = {"_id"}
          />;
};
export default UserTable;
