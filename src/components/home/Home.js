import React from "react";

import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";

export default function Home() {
  return (
    <div>
      <Header />

//       <Link to="/product">Product</Link>
      <Main />

      <Footer />
    </div>
  );
}
