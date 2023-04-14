import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { LIST_ICON_NAVBAR } from "constants/list";
import styled from "styled-components";
const { Header, Content, Sider } = Layout;

const items = LIST_ICON_NAVBAR.map((item) => {
  return {
    key: item.id,
    label: !item?.children ? (
      <Link to={item.path}>{item.name}</Link>
    ) : (
      <p>{item.name}</p>
    ),
    icon: <img src={item.icon} style={{ width: "40px" }} alt={"icon-admin"} />,
    children: item?.children,
  };
});
const SiderStyle = styled(Sider)`
  overflow: auto;
  height: calc(100vh - 64px);
  position: fixed !important;
  left: 0;
  top: 64px;
  bottom: 0;
`;

type SideMenuProps = {
  collapsed:boolean
}
const SideMenu:React.FC<SideMenuProps> = (props) => {
  const {collapsed} = props


  return (
    <SiderStyle trigger={null} collapsible collapsed={collapsed} >
      <Menu mode="inline" defaultSelectedKeys={["0"]} items={items}  />
    </SiderStyle>
  );
}


export default SideMenu;