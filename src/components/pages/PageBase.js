import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./PageBase.css";
import { Link } from "react-router-dom";

export default function PageBase(props) {
  return (
    <div className="page-base">
      <Header />

      <div className="page-container">
        <div className="items-title">
          <h3>{props.h2}</h3>
          <hr />
        </div>

        <div className="item-cards">
          {props.pageData.map((e) => (
            <div className="page-item" key={e.id}>
              <Link to={`/product/${e.id}`}>
                <div className="item-img-container">
                  <img src={e.img} alt="" />
                </div>
                <div className="item-details">
                  <p className="item">{e.title}</p>
                  <p className="price">C${e.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
