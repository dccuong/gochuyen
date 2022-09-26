import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import LayoutAdmin from "./component/admin/LayoutAdmin";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
type Props = {};

const App = (props: Props) => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route element={} path="" /> */}
      </Route>
      <Route path="" element={<LayoutAdmin />}>
        <Route index element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
