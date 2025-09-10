import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import { Aside, ModalFooter } from "@/widgets";
=======
import { Aside, Header, ModelFooter } from "../../widgets";
>>>>>>> e75aba1f74a52c66e97ce7baae36eec88a4a4b1d
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <div className="app">
<<<<<<< HEAD
=======
      <Header />
>>>>>>> e75aba1f74a52c66e97ce7baae36eec88a4a4b1d
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
