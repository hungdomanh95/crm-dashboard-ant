import { Layout } from "antd";
import HeaderContent from "layout/MainLayout/MainHeader";
import MainContent from "layout/MainLayout/MainContent";
import SideMenu from "layout/MainLayout/MainSider";
import { useEffect, useState } from "react";
import { useResponsive } from "hook/useResponsive";

type MainLayoutProps = {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { mobileOnly } = useResponsive();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (mobileOnly) setCollapsed(true)
    else setCollapsed(false);
  }, [mobileOnly]);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <HeaderContent toggleSider={toggleSider} />
      <Layout hasSider>
        <SideMenu collapsed={collapsed} />
        <MainContent collapsed={collapsed} />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
