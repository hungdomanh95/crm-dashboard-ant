import React from "react";
import SiderMenu from "./SiderMenu";
import * as S from "./SideMenu.styles";

type SideMenuProps = {
  collapsed: boolean;
};
const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { collapsed } = props;

  return (
    <S.SiderStyle trigger={null}>
      <SiderMenu collapsed={collapsed} />
    </S.SiderStyle>
  );
};

export default SideMenu;
