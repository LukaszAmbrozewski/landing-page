import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Main} from "./views/Main/Main";

export const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Main />} />
      </Routes>
  );
}