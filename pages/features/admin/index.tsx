import { DeleteFilled, EditFilled, PlusCircleFilled } from "@ant-design/icons";
import { Form, Select, Tabs } from "antd";
import { Table } from "antd";
import { FC } from "react";
import ButtonCf from "../../../components/button";
import Modal from "../../../components/Modal";
import TextInput from "../../../components/textInput";
import useAdmin, { ReceivedProps } from "./hook";
import AdminWrapper from "./styled";

const { Option } = Select;

const AdminLayout: FC<ReceivedProps> = ({
  data,
  onTab,
  columns,
  onAction,
  isModalOpen,
  setModal,
  onFinishFailed,
  onFinish,
  method,
  category,
}) => {
  return (
    <AdminWrapper>
      <Modal
        closeModal={setModal}
        headerTitle={`methot : ${method}`}
        header={true}
        isShowing={isModalOpen}
      >
        <Form
          style={{ color: "#fff" }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {columns.map((item: any, index: number) =>
            item.title === "id" ? undefined : item.title ===
              "userId" ? undefined : item.title === "categoryId" ? (
              <div key={index}>
                <h2>{item.title}</h2>
                <Form.Item
                  style={{ color: "#fff" }}
                  name={item.title}
                  rules={[
                    {
                      required: true,
                      message: `Please input your ${item.title}!`,
                    },
                  ]}
                >
                  <Select placeholder="Select Category" allowClear>
                    {category.length > 0
                      ? category.map((cate: any, index: number) => (
                          <Option value={cate.id} key={index}>
                            {cate.name}
                          </Option>
                        ))
                      : ""}
                  </Select>
                </Form.Item>
              </div>
            ) : (
              <div key={index}>
                <h2>{item.title}</h2>
                <Form.Item
                  style={{ color: "#fff" }}
                  name={item.title}
                  rules={[
                    {
                      required: true,
                      message: `Please input your ${item.title}!`,
                    },
                  ]}
                >
                  <TextInput placeholder={item.title} />
                </Form.Item>
              </div>
            )
          )}

          <Form.Item>
            <ButtonCf
              style={{ width: "100%", marginLeft: "-5px" }}
              variant="warning"
              htmlType="submit"
            >
              Submit
            </ButtonCf>
          </Form.Item>
        </Form>
      </Modal>
      <Tabs
        className="tabs"
        defaultActiveKey="1"
        onChange={onTab}
        items={[
          {
            label: `PRODUCT`,
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
                          width: 200,
                          render: (event) => (
                            <div className="action">
                              <PlusCircleFilled
                                onClick={() => onAction(event, "post")}
                                style={{ fontSize: 20, color: "green" }}
                              />
                              <EditFilled
                                style={{ fontSize: 20, color: "yellow" }}
                                onClick={() => onAction(event, "put")}
                              />
                              <DeleteFilled
                                style={{ fontSize: 20, color: "red" }}
                                onClick={() => onAction(event, "delete")}
                              />
                            </div>
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
            label: `CATEGORY`,
            key: "2",
            children: `Content of Tab Pane CATEGORY`,
          },
          {
            label: `ACCCOUNT`,
            key: "3",
            children: `Content of Tab Pane ACCCOUNT`,
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
