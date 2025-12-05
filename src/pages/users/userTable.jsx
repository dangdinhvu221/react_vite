import { Space, Table, Tag } from "antd";
import '../../styles/table.css';

const UserTable = () => {
  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => <a>{text}</a>,
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
  const data = [
    {
      key: "1",
      fullname: "John Brown",
      email: 'user1@fpt.com',
      phone: "0968996999",
    },
    {
      key: "2",
      fullname: "Jim Green",
      email: 'user2@fpt.com',
      phone: "0968999999",
    },
    {
      key: "3",
      fullname: "Joe Black",
      email: 'user3@fpt.com',
      phone: "0968999899",
    }
  ];
  
  return <Table columns={columns} dataSource={data} />;
};
export default UserTable;
