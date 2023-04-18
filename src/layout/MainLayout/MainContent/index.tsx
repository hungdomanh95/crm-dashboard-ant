import { Layout } from "antd";
import { Outlet } from "react-router";
import styled from "styled-components";
const { Content } = Layout;
type PageContentProps = {
  collapsed: boolean;
};

const ContainerLayout = styled(Layout)<PageContentProps>`
  margin-left: ${({ collapsed }) => (!collapsed ? "200px" : "80px")};
  height: calc(100vh - 64px);
  transition: all 0.2s ease;
  /* overflow-y: scroll; */
  /* margin-left:200px; */
`;
const ContainerContent = styled(Content)`
  margin:24px 16px;
  z-index:2;
  /* overflow-y: scroll; */
    .ant-layout{
      /* background-color:#E8EDF2 */
    }
`

const MainContent: React.FC<PageContentProps> = ({ collapsed }) => {
  return (
    <ContainerLayout collapsed={collapsed} className="site-layout">
      <ContainerContent>
        <Outlet />
      </ContainerContent>
    </ContainerLayout>
  );
};

export default MainContent;
