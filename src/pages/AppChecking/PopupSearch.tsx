import { Button, DatePicker, Form, Input, Select, Space } from "antd";

type PopupProps = {}
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};
const onFinish = (values: any) => {
  console.log(values);
};
const types = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
];
const PopupSearch:React.FC<PopupProps> = () => {
  const [form] = Form.useForm();
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
  return (
    <Form {...layout}
    name="nest-messages"
    onFinish={onFinish}
    labelAlign="left"
    >
     <Form.Item name="Status" label="Status">
      <Select options={types} onChange={handleChange} placeholder="ALL" />
    </Form.Item>
     <Form.Item name="Keyword Type" label="Keyword Type" >
       <Select options={types} onChange={handleChange} placeholder="ALL" />
    </Form.Item>
    <Form.Item label="Keyword">
      <Input />
    </Form.Item>
    <Form.Item label="Month">
      <DatePicker />
    </Form.Item>
  </Form>
  );
}


export default PopupSearch;