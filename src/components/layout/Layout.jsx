import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
