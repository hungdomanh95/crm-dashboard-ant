import { Layout } from "antd";
import { Outlet } from "react-router";
import Routers from "routers/Routers";
import styled from "styled-components";
const { Content } = Layout;
type PageContentProps = {
  collapsed: boolean;
};

const ContainerLayout = styled(Layout)<PageContentProps>`
  margin-left: ${({ collapsed }) => (!collapsed ? "200px" : "80px")};
  height: calc(100vh - 64px);
  transition: all 0.2s ease;
  overflow-y: scroll;
`;
const ContainerContent = styled(Content)`
  margin:24px 16px;
  overflow-y: scroll;
`

const PageContent: React.FC<PageContentProps> = ({ collapsed }) => {
  return (
    <ContainerLayout collapsed={collapsed} className="site-layout">
      <ContainerContent>
        <Routers />
        <Outlet />
      </ContainerContent>
    </ContainerLayout>
  );
};

export default PageContent;
