import { Route, Routes } from "react-router-dom";
import {
  ActualPerformance,
  AppChecking,
  ChatBox,
  Commission,
  ProductBox,
  ProjectManagement,
  Report,
  SalesPerformance,
  Setting,
  TargetPerformance,
  UploadCenter,
  NotFound,
} from "pages";
type RoutesProps = {};
const Routers: React.FC<RoutesProps> = () => {
  return (
    <Routes>
      <Route path="/sales-performance" element={<SalesPerformance />} />
      <Route path="/target-performance" element={<TargetPerformance />} />
      <Route path="/actual-performance" element={<ActualPerformance />} />
      <Route path="/product-box" element={<ProductBox />} />
      <Route path="/app-checking" element={<AppChecking />} />
      <Route path="/chat-box" element={<ChatBox />} />
      <Route path="/commission" element={<Commission />} />
      <Route path="/project-management" element={<ProjectManagement />} />
      <Route path="/report" element={<Report />} />
      <Route path="/upload-center" element={<UploadCenter />} />
      {/* <Route path="/setting" element={<Setting />} /> */}
      <Route path="/setting" >
        <Route path=":id" element={<Setting />} />
        {/* <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
