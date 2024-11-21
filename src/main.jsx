import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import { CarPage } from "./pages/CarPage/CarPage.jsx";
import Provider from "./context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="estoque" element={<SearchPage />} />
          <Route path="/carro/:id" element={<CarPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
