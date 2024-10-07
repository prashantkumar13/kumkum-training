"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AdmissionsPage from "./AdminPage";

const Certificate = dynamic(() => import("./Certificate"), { ssr: false });

const Wrapper = () => {
  const [aadharNumber, setAadharNumber] = useState("");
  
  // Initialize state based on localStorage value
  const [show, setShow] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("showCertificate")) || false;
    } else {
      return false;
    }
  });

  // Update localStorage whenever the show state changes
  useEffect(() => {
    localStorage.setItem("showCertificate", JSON.stringify(show));
  }, [show]);

  // Function to directly set show to false
  const hideCertificate = () => {
    setShow(false);
  };

  const handleHideClick = () => {
    if (aadharNumber === "Swayam") {
      setShow((prevShow) => !prevShow);
    }
  };

  return (
    <div suppressHydrationWarning>
      {show ? (
        <AdmissionsPage hideCertificate={hideCertificate} />
      ) : (
        <Certificate
          aadharNumber={aadharNumber}
          setAadharNumber={setAadharNumber}
          handleHideClick={handleHideClick}
        />
      )}
    </div>
  );
};

export default Wrapper;
