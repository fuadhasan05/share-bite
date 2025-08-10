import React, { useEffect } from "react";
import { Link, useRouteError } from "react-router";
import Button from "../components/Button/Button";

const ErrorPage = () => {
  const error = useRouteError();

  // Set dynamic title
    useEffect(() => {
      document.title = "Share Bite - Error";
    }, []);

  return (
    <>
      <div className="py-24 text-center border border-red-600 m-2 md:m-40 rounded-2xl">
        <h1 className="mb-8 text-7xl font-thin text-gray-900">
          {error?.status || 404}
        </h1>
        <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
          {error?.error?.message || "Something Went Wrong!"}
        </p>
        <Link to="/">
          <Button variant="primary" className="mt-5">
            Browse Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
