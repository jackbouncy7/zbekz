/* eslint-disable no-unused-vars */
import React from "react";
import imgerr from "../../../public/assets/images/404.svg";
import { Link } from "react-router-dom";

const NotFoundError = () => {
  return (
    <div className="mb-4">
      <img className="error__img" src={imgerr} alt="" />
      <h3 className="title__error ">Not found</h3>
      <Link
        to={"/"}
        className="d-block text-center h5 text-success m-auto"
      ></Link>
    </div>
  );
};

export default NotFoundError;
