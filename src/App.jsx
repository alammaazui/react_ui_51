import React from 'react'
import Nav from './blogComponents/Nav'
import Home from './blogComponents/Home'
import Create from "./blogComponents/Create";
import View from "./blogComponents/View";
import Edit from "./blogComponents/Edit";
import Footer from "./blogComponents/Footer";
import { Route, Routes } from 'react-router';

export default function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path={"createBlog"} element={<Create></Create>}></Route>
        <Route path={"viewBlog"} element={<View></View>}></Route>
        <Route path={"editBlog"} element={<Edit></Edit>}></Route>
        <Route path={"test"} element={<h1>abc</h1>}></Route>
        <Route path={"/"} element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}
