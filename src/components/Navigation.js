import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    //a는 페이지를 새로고침해버려서 Link를 사용, Link는 라우터 안에서 사용해야 함
    <div className="nav">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
    </div>
  );
}

export default Navigation;
