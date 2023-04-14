import { Button, DatePicker, Form, Input, Space } from "antd";

type PopupProps = {}
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const onFinish = (values: any) => {
  console.log(values);
};
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
    <Form.Item label="Keyword">
      <Input />
    </Form.Item>
    <Form.Item label="From">
      <DatePicker />
    </Form.Item>
    <Form.Item label="To">
      <DatePicker />
    </Form.Item>
  </Form>
  );
}


export default PopupSearch;