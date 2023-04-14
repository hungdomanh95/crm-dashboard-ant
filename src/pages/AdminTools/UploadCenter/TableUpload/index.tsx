import React, { useLayoutEffect, useRef, useState } from 'react';
import { Button, Card, Col, Layout, Row, Space, Table,Popconfirm } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DATA_UPLOAD_CENTER } from '../list';
import { DataUpload } from '../type';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import PopupSearch from './PopupSearch';
const columns: ColumnsType<DataUpload> = [
  {
    title: 'Type',
    dataIndex: 'bucketName',
    sorter: {
      compare: (a, b) => a.bucketName.length - b.bucketName.length,
    },
  },
  {
    title: 'Chanel',
    dataIndex: 'channel',
    sorter: {
      // compare: (a, b) => (a.channel?.length ?? 0) - (b.notes?.length ?? 0)
      // compare: (a, b) => a.channelId.length - b.channelId.length,
    },
  },
  {
    title: 'Upload At',
    dataIndex: 'uploadedAt',
    sorter: {
      compare: (a, b) => a.uploadedAt.length - b.uploadedAt.length,
    },
  },
  {
    title: 'Sales Code',
    dataIndex: 'salesCode',
    sorter: {
      compare: (a, b) => a.salesCode.length - b.salesCode.length,
    },
  },
  {
    title: 'Upload By',
    dataIndex: 'uploadedBy',
    sorter: {
      compare: (a, b) => a.uploadedBy.length - b.uploadedBy.length,
    },
  },
  {
    title: 'Download',
    dataIndex: 'fileName',
    sorter: {
      compare: (a, b) => a.fileName.length - b.fileName.length,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: {
      compare: (a, b) => a.status.length - b.status.length,
    },
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    sorter: {
      compare: (a, b) => (a.notes?.length ?? 0) - (b.notes?.length ?? 0)
    },
  },
];

type TableUploadProps = {}

const TitleHistory = styled.p`
  color:"#454749",
  font-weight: 700;
  font-size: 24px;
`;
const ButtonAction = styled(Button)`
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #174579;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TableUpload:React.FC<TableUploadProps> = () => {
  const [tableHeight, setTableHeight] = useState(600);
  console.log('tableHeight: ', tableHeight);
// ref is the Table ref.
const ref = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  if(!ref.current) return
  const node = ref.current;
  const { top } = node!.getBoundingClientRect();

  // normally TABLE_HEADER_HEIGHT would be 55.
  setTableHeight(window.innerHeight - top - 64);
}, [ref]);
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
  });
  return (
    <Layout>
      <Space direction="vertical">
        <Row>
            <Col span={16}> <TitleHistory>Upload History</TitleHistory></Col>
            <Col span={8} >
              <Row justify={"end"}>
              <Popconfirm
                title=""
                icon={<></>}
                description=<PopupSearch/>
                onConfirm={confirm}
                onOpenChange={() => console.log('open change')}
                okText="Search"
                cancelText="Clear"
              >
                  <ButtonAction type="primary" icon={<SearchOutlined /> }>Search</ButtonAction>
              </Popconfirm>
              </Row>
            </Col>
          </Row>
        <Card>
          <Table columns={columns} dataSource={DATA_UPLOAD_CENTER} pagination={{position: ["bottomCenter"] }} scroll={{y:tableHeight}}  />
        </Card>
      </Space>
    </Layout>
  );
}


export default TableUpload;