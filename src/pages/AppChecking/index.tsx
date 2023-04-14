import React, { useState } from "react";
import { Table,Button, Space, Row, Col, Layout, Card, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataCheck } from "./type";
import { DATA_CHECKING } from "./list";

import styled from "styled-components";
import { SearchOutlined,FileExcelOutlined } from '@ant-design/icons';
import PopupSearch from "./PopupSearch";
const columns: ColumnsType<DataCheck> = [
  {
    title: "Sales Code",
    dataIndex: "salesCode",
  },
  {
    title: "Sales Name",
    dataIndex: "salesName",
  },
  {
    title: "Sup Code",
    dataIndex: "supCode",
  },
  {
    title: "Sup Name",
    dataIndex: "supName",
  },
  {
    title: "ASM Code",
    dataIndex: "asmCode",
  },
  {
    title: "ASM Name",
    dataIndex: "asmName",
  },
  {
    title: "RSM Code",
    dataIndex: "rsmCode",
  },
  {
    title: "RSM Name",
    dataIndex: "rsmName",
  },
  {
    title: "Agreement No",
    dataIndex: "agreementId",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
  },
  {
    title: "Customer Gender",
    dataIndex: "customerGender",
  },
  {
    title: "Curres District",
    dataIndex: "customerDistrictName",
  },
  {
    title: "Curres City",
    dataIndex: "customerProvinceName",
  },
  {
    title: "Company",
    dataIndex: "customerCompanyName",
  },
  {
    title: "Scheme Id",
    dataIndex: "schemeId",
  },
  {
    title: "Scheme Desc",
    dataIndex: "schemeDesc",
  },
  {
    title: "Loan Amount",
    dataIndex: "loanAmount",
  },
  {
    title: "Disb Amt. without Insurance",
    dataIndex: "disbursalAmtNoInsurance",
  },
  {
    title: "Insurance Fee",
    dataIndex: "insuranceFee",
  },
  {
    title: "Loan Rate",
    dataIndex: "loanRate",
  },
  {
    title: "Created Date",
    dataIndex: "creationDate",
  },
  {
    title: "Pending Date",
    dataIndex: "pendingDate",
  },
  {
    title: "UND Date",
    dataIndex: "undDate",
  },
  {
    title: "UND result",
    dataIndex: "undResult",
  },
  {
    title: "Time Of Last Status",
    dataIndex: "resultDate",
  },
  {
    title: "Defer",
    dataIndex: "defer",
  },
  {
    title: "Last Comment",
    dataIndex: "lastComment",
  },
  {
    title: "Last Status Of Id",
    dataIndex: "status",
  },
  {
    title: "Reject Code",
    dataIndex: "rejectCode",
  },
  {
    title: "Reason",
    dataIndex: "reason",
  },
  {
    title: "Received After",
    dataIndex: "receivedAfter",
  },
  {
    title: "Disb Amount",
    dataIndex: "loanAmount",
  },
  {
    title: "Disb Date",
    dataIndex: "disbursedDate",
  },
  {
    title: "Status",
    dataIndex: "agreementStatus",
  },
  {
    title: "Insurance",
    dataIndex: "hasInsurance",
  },
  {
    title: "Scheme Rate",
    dataIndex: "schemeRate",
  },
  {
    title: "Loan Amount Rate",
    dataIndex: "loanAmountRate",
  },
  {
    title: "Contract Adjusted By Gender",
    dataIndex: "contractAdjustedByGender",
  },
  {
    title: "Contract Adjusted",
    dataIndex: "noOfContractsAfterAdjusted",
  },
  {
    title: "EKYC",
    dataIndex: "ekyc",
  },
];

const TitleChecking = styled.p`
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
function AppChecking() {
  return (
      <Layout>
        <Space direction="vertical" size={"middle"}>
          <Row >
            <Col span={16}><TitleChecking>Check Contract Information Search</TitleChecking></Col>
            <Col span={8} >
              <Row justify={"end"}>
                <Space>
                  <ButtonAction type="primary" icon={<FileExcelOutlined />}>Export Excel</ButtonAction>
                  <ButtonAction type="primary" icon={<FileExcelOutlined />}>Export Csv</ButtonAction>
                  <Popconfirm
                title=""
                icon={<></>}
                description=<PopupSearch/>
                // onConfirm={confirm}
                onOpenChange={() => console.log('open change')}
                okText="Search"
                cancelText="Clear"
              >
                  <ButtonAction type="primary" icon={<SearchOutlined />}>Search</ButtonAction>
              </Popconfirm>
                </Space>
              </Row>
            </Col>
          </Row>
          <Card>
            <Table
              columns={columns}
              dataSource={DATA_CHECKING}
              pagination={{ position: ["bottomCenter"] }}
              scroll={{ x: 4000, y: 400 }}
              tableLayout={'fixed'}
            />
          </Card>
        </Space>
      </Layout>
  );
}

export default AppChecking;
