import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Table,
  Select,
  Upload,
  DatePicker,
  Card,
  Space,
} from "antd";
type FormUploadProps = {};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const types = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
];

const onFinish = (values: any) => {
  console.log(values);
};
const FormUpload: React.FC<FormUploadProps> = () => {
  const [form] = Form.useForm();
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
  return (
    <Card style={{ width: 500, alignSelf: "center", marginBottom: 20 }}>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Channel"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Type"
          label="Type"
          rules={[{ required: true, message: "Missing Type" }]}
        >
          <Select
            options={types}
            onChange={handleChange}
            placeholder="Select a option and change input text above"
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true }]}
          name="selectfile"
          label="Select File"
          valuePropName="fileList"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item rules={[{ required: true }]} label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Space>
            <Button type="default" htmlType="submit">
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Upload File
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormUpload;
