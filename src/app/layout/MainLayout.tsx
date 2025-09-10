import { Outlet } from "react-router-dom";
import { Aside, ModalFooter } from "@/widgets";

import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div className="app">
      <Aside />
      <div className="main">
        <Suspense fallback={<h1>Loading......</h1>}>
          <Outlet />
        </Suspense>
      </div>
      <ModalFooter />
    </div>
  );
};

export default MainLayout;
