import React, { useState } from "react";
import "./App.scss";
import { Layout } from "antd";
import SideMenu from "pages/SideMenu";
import PageContent from "pages/PageContent";
import HeaderContent from "pages/HeaderContent/HeaderContent";
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <HeaderContent toggleCollapsed={toggleCollapsed} />
      <Layout hasSider>
        <SideMenu collapsed={collapsed} />
        <PageContent collapsed={collapsed} />
      </Layout>
    </Layout>
  );
};

export default App;
