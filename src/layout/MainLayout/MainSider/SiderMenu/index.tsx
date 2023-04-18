import React from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';
import { sidebarNavigation } from '../SideBarNavigation';
import styled from "styled-components";
import Icon from '@ant-design/icons';
type SiderMenuProps = {
  collapsed:boolean
}

type MenuProps = {
  collapsed: boolean;
};

let sidebarNavFlat:string[] = [sidebarNavigation[0].key]

const StyledMenu = styled(Menu)<MenuProps>`
    .ant-menu-submenu-arrow{
      right:5%
    }
    .ant-menu-submenu-title {
      .ant-menu-title-content{
        display: ${({ collapsed }) => (!collapsed ? "block" : "none")} !important;
        /* display:none; */
      }
    }
    .ant-menu-item{
      .ant-menu-title-content{
        display: ${({ collapsed }) => (!collapsed ? "block" : "none")} !important;
      }
    }
    .ant-menu-item-only-child{
      .ant-menu-title-content{
        display: flex!important;
      }
    }
`

const SiderMenu:React.FC<SiderMenuProps> = ({collapsed}) => {

  return (
    <StyledMenu
      collapsed={collapsed}
      style={{ width: !collapsed ? 200 : 89 }}
      mode="inline"
      triggerSubMenuAction={'click'}
      defaultSelectedKeys={sidebarNavFlat}
      items={sidebarNavigation.map((nav) => {
        const isSubMenu = nav.children?.length;
        return {
          key: nav.key,
          title: nav.title,
          label: isSubMenu ? nav.title : <Link to={nav.url || ''}>{nav.title}</Link>,
          icon: <img src={nav.icon} style={{ width: "40px" }} alt={"icon-admin"} />,
          children:
            isSubMenu &&
            nav.children &&
            nav.children.map((childNav) => ({
              key: childNav.key,
              icon:nav.iconChild,
              label: <Link to={childNav.url || ''}>
                 <Icon component={childNav.iconChild as React.ForwardRefExoticComponent<any>}  style={{fontSize:24, color:"#184478"}} />
                </Link>,
              title: childNav.title,
            })),
            popupClassName:"menuchild",
        };
      })}
    />
  );
}


export default SiderMenu;