import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import CustomLayout from "./components/CustomLayout";
import FactInfoPage from "./components/FactInfoPage";

const FactsRoutes = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CustomLayout>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/:id" element={<FactInfoPage />} />
          </Routes>
        </CustomLayout>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default FactsRoutes;
