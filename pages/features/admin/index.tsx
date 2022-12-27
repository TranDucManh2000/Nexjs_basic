import { Tabs } from "antd";
import { Table } from "antd";
import { FC } from "react";
import useAdmin, { ReceivedProps } from "./hook";
import AdminWrapper from "./styled";

const AdminLayout: FC<ReceivedProps> = ({
  data,
  onChange,
  columns,
  onAction,
}) => {
  return (
    <AdminWrapper>
      <Tabs
        className="tabs"
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Tab 1`,
            key: "1",
            children: (
              <Table
                columns={
                  columns.length
                    ? [
                        ...columns,
                        {
                          title: "Action",
                          key: "operation",
                          fixed: "right",
                          width: 100,
                          render: (event) => (
                            <a onClick={() => onAction(event)}>action</a>
                          ),
                        },
                      ]
                    : []
                }
                dataSource={data}
                scroll={{ x: 1500, y: 800 }}
              />
            ),
          },
          {
            label: `Tab 2`,
            key: "2",
            children: `Content of Tab Pane 2`,
          },
          {
            label: `Tab 3`,
            key: "3",
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </AdminWrapper>
  );
};

const AdminNft: FC<ReceivedProps> = (props) => (
  <AdminLayout {...useAdmin(props)} />
);

export default AdminNft;
