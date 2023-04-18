import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ROUTE_NAME from "./RouteName";
import {
  ActualPerformance,
  AppChecking,
  ChatBox,
  Commission,
  ProductBox,
  Report,
  SalesPerformance,
  TargetPerformance,
  NotFound,
  Proportion,
  Reject,
  Statistics,
  Store,
  Partner,
  UploadCenter,
  UserManagement,
} from "pages";
import MainLayout from "layout/MainLayout";
type AppRouterProps = {};

const AppRouter: React.FC<AppRouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={ROUTE_NAME.sales} />} />
          <Route path={ROUTE_NAME.sales} element={<SalesPerformance />} />
          <Route path={ROUTE_NAME.target} element={<TargetPerformance />} />
          <Route path={ROUTE_NAME.actual} element={<ActualPerformance />} />
          <Route path={ROUTE_NAME.commission} element={<Commission />} />
          <Route path={ROUTE_NAME.checking} element={<AppChecking />} />
          <Route path={ROUTE_NAME.proportion} element={<Proportion />} />
          <Route path={ROUTE_NAME.reject} element={<Reject />} />
          <Route path={ROUTE_NAME.statistics} element={<Statistics />} />
          <Route path={ROUTE_NAME.product} element={<ProductBox />} />
          <Route path={ROUTE_NAME.chatbox} element={<ChatBox />} />
          <Route path={ROUTE_NAME.report} element={<Report />} />
          <Route path={ROUTE_NAME.pos_admin}>
            <Route path={ROUTE_NAME.store} element={<Store />} />
            <Route path={ROUTE_NAME.partner} element={<Partner />} />
          </Route>

          <Route path={ROUTE_NAME.admin_tools}>
            <Route path={ROUTE_NAME.upload_center} element={<UploadCenter />} />
            <Route path={ROUTE_NAME.userManage} element={<UserManagement />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
