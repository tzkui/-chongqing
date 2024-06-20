import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

let Login = React.lazy(()=>import("../views/login"))
let MyComponents = React.lazy(()=>import("../views/MyComponents"))

export default function RouterView(){
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Suspense fallback={<div>loading</div>}><Login /></Suspense>}></Route>
        <Route path="/exa" element={<Suspense fallback={<div>loading</div>}><MyComponents /></Suspense>}></Route>
      </Routes>
    </HashRouter>
  )
}