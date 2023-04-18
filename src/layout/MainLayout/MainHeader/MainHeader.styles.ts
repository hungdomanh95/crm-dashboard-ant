import styled, { css } from "styled-components";
import { Layout } from 'antd';
const { Header } = Layout;
export const ContainerHeader = styled(Header)`
  background: linear-gradient(186.77deg, #00589b -2.75%, #174579 99.27%);
  display: flex;
  position: sticky;
  top:0;
  z-index:1;
  width: 100%;
  padding:unset;
`;
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  height: 40px;
  margin-left: 32px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 12px;
`;
export const Line = styled.div`
  border-right: 1px solid white;
  height: 28px;
`;
export const NameUser = styled.p`
  color: white;
  font-size: 14px;
  line-height: 20px;
`;
export const Avatar = styled.img`
  width: 32px;
  height: 32px;
`;
export const TextName = styled.p`
  color: white;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const TextRole = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

css`
  .ant-layout-header {
    padding: unset;
    line-height: unset;
  }
`;
