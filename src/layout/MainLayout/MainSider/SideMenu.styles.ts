import styled from "styled-components";
import { Layout } from "antd";
import { LAYOUT } from "styles/theme/contants";
const { Sider } = Layout;
export const SiderStyle = styled(Sider)`
  overflow: auto;
  height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  /* max-height: calc(100vh - ${LAYOUT.desktop.headerHeight}); */
  position: fixed !important;
  overflow: visible;
  left: 0;
  top: 64px;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color:#E8EDF2!important
`;