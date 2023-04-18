import { IconNavBar } from 'asset/img';
import React, { FunctionComponent, SVGProps } from 'react';
import ROUTE_NAME from "routers/RouteName";

export interface SidebarNavigationItem {
  title: string;
  key: string;
  url?: string;
  children?: SidebarNavigationItem[];
  icon?: string;
  iconChild?: FunctionComponent<SVGProps<SVGSVGElement>> | string
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'Sales Performance',
    key: 'sales-performance',
    url: `${ROUTE_NAME.sales}`,
    icon:  IconNavBar.sale
  },
  {
    title: 'Target Performance',
    key: 'target-performance',
    url: `${ROUTE_NAME.target}`,
    icon: IconNavBar.target,
  },
  {
    title: 'Actual Performance',
    key: 'actual-performance',
    url: `${ROUTE_NAME.actual}`,
    icon: IconNavBar.performance,
  },
  {
    title: 'Commission',
    key: 'commission',
    url: `${ROUTE_NAME.commission}`,
    icon: IconNavBar.commission,
  },
  {
    title: 'App Checking',
    key: 'app-checking',
    url:`${ROUTE_NAME.checking}`,
    icon: IconNavBar.check,
  },
  {
    title: 'Proportion Of Products',
    key: 'proportion-of-products',
    url:`${ROUTE_NAME.proportion}`,
    icon: IconNavBar.proprtion,
  },
  {
    title: 'Reject Reason Rate',
    key: 'reject-reason-rate',
    url:`${ROUTE_NAME.reject}`,
    icon: IconNavBar.reject,
  },
  {
    title: 'Statistics',
    key: 'statistics',
    url:`${ROUTE_NAME.statistics}`,
    icon: IconNavBar.statistic,
  },
  {
    title: 'Product Box',
    key: 'product-box',
    url:`${ROUTE_NAME.product}`,
    icon: IconNavBar.box,
  },
  {
    title: 'Chat Box',
    key: 'chat-box',
    url:`${ROUTE_NAME.chatbox}`,
    icon: IconNavBar.chat,
  },
  {
    title: 'Report',
    key: 'report',
    url:`${ROUTE_NAME.report}`,
    icon: IconNavBar.report,
  },
  {
    title: 'POS Admin',
    key: 'pos-admin',
    icon: IconNavBar.pos_admin,
    children: [
      {
        title: 'Store',
        key: 'store',
        url:`${ROUTE_NAME.store}`,
        iconChild:IconNavBar.store
      },
      {
        title: 'Partner',
        key: 'store',
        url:`${ROUTE_NAME.partner}`,
        iconChild:IconNavBar.partner
      },
    ],
  },
  {
    title: 'Admin tools',
    key: 'admin-tools',
    icon: IconNavBar.admin_tool,
    children: [
      {
        title: 'User Management',
        key: 'user-management',
        url:`${ROUTE_NAME.userManage}`,
        iconChild:IconNavBar.management
      },
      {
        title: 'Role',
        key: 'role',
        url:`${ROUTE_NAME.role}`,
        iconChild:IconNavBar.role
      },
      {
        title: 'Position',
        key: 'position',
        url:`${ROUTE_NAME.position}`,
        iconChild:IconNavBar.position
      },
      {
        title: 'Menu',
        key: 'menu',
        url:`${ROUTE_NAME.menu}`,
        iconChild:IconNavBar.menu
      },
      {
        title: 'Widget',
        key: 'widget',
        url:`${ROUTE_NAME.widget}`,
        iconChild:IconNavBar.widget
      },
      {
        title: 'Executive',
        key: 'executive',
        url:`${ROUTE_NAME.executive}`,
        iconChild:IconNavBar.executive
      },
      {
        title: 'Product Box',
        key: 'product-box',
        url:`${ROUTE_NAME.productbox}`,
        iconChild:IconNavBar.productbox
      },
      {
        title: 'Incentive Policies',
        key: 'incentive-policies',
        url:`${ROUTE_NAME.policies}`,
        iconChild:IconNavBar.policies
      },
      {
        title: 'Scheme Groups',
        key: 'scheme-groups',
        url:`${ROUTE_NAME.scheme_group}`,
        iconChild:IconNavBar.scheme_group
      },
      {
        title: 'Scheme Rate',
        key: 'scheme-rate',
        url:`${ROUTE_NAME.scheme_rate}`,
        iconChild:IconNavBar.scheme_rate
      },
      {
        title: 'Adjustment Policies',
        key: 'adjustment-policies',
        url:`${ROUTE_NAME.adj_policies}`,
        iconChild:IconNavBar.adj
      },
      {
        title: 'Campaign Rate',
        key: 'campaign-rate',
        url:`${ROUTE_NAME.campaign_rate}`,
        iconChild:IconNavBar.campain
      },
      {
        title: 'Region Rate',
        key: 'region-rate',
        url:`${ROUTE_NAME.region_rate}`,
        iconChild:IconNavBar.region_rate
      },
      {
        title: 'Province Rate',
        key: 'province-rate',
        url:`${ROUTE_NAME.province_rate}`,
        iconChild:IconNavBar.province_rate
      },
      {
        title: 'Paid Settings',
        key: 'paid-settings',
        url:`${ROUTE_NAME.paid_settings}`,
        iconChild:IconNavBar.paid_settings
      },
      {
        title: 'Payment Settings',
        key: 'payment-settings',
        url:`${ROUTE_NAME.payment_settings}`,
        iconChild:IconNavBar.payment_settings
      },
      {
        title: 'Upload Center',
        key: 'upload-center',
        url:`${ROUTE_NAME.upload_center}`,
        iconChild:IconNavBar.upload_center
      },
      {
        title: 'Cron Job',
        key: 'cron_job',
        url:`${ROUTE_NAME.cron_job}`,
        iconChild:IconNavBar.cron
      },

    ],
  },
];
