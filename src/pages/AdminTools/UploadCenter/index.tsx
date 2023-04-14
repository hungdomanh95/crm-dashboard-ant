import { Layout, Space } from "antd";
import React, { useState } from "react";
import FormUpload from "./FormUpload";
import TableUpload from "./TableUpload";

const UploadCenter: React.FC = () => {
  return (
    <Layout>
      {/* <Space direction="vertical" size={'middle'} align="center" > */}
        <FormUpload />
        <TableUpload />
      {/* </Space> */}
    </Layout>
  );
};

export default UploadCenter;
