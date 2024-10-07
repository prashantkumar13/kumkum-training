"use client";
import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "./Certificates.module.css";
import Image from "next/image";

function Certificate({ handleHideClick, aadharNumber, setAadharNumber }) {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: landscape;
        margin: 0;
      }
      
      body {
        -webkit-print-color-adjust: exact;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
      }
  
      /* Mobile-specific adjustments */
      @media print and (max-width: 768px) {
        @page {
          size: landscape;
          margin: 0;
        }
  
        body {
          width: 100%;
          height: auto;
        }
      }
    `,
  });
  
  

  const fetchCertificates = () => {
    fetch(
      `https://kumkum-training-backend.vercel.app/admission/searchByAadhar?aadhar=${aadharNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCertificates(data);
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
        alert("Failed to fetch certificates. Please try again.");
      });
  };

  const handleDownloadClick = (certificate) => {
    setSelectedCertificate(certificate);
    setTimeout(() => {
      handlePrint();
    }, 0);
  };

  return (
    <div className="h-full w-full">
      <div className="mx-auto my-10 max-w-2xl md:max-w-7xl sm:rounded-3xl ">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          <div className="col-span-12 bg-imagee">
            <div className="mb-10 mt-24 lg:mx-64 lg:my-24">
              <h3 className=" cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-semibold text-white mb-3">
                Download <span onClick={handleHideClick}>Certificate</span>
              </h3>

              <h3 className="text-base font-normal opacity-75 text-white text-center mb-8">
                Enter your Aadhaar Number to download <br /> your certificates.
              </h3>

              <div>
                <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full pt-5 lg:pt-0">
                  <input
                    type="text"
                    value={aadharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                    className="py-6 lg:py-8 text-sm md:text-lg w-full mx-3 text-black rounded-full pl-8 focus:outline-none focus:text-black"
                    placeholder="Enter your Aadhaar Number"
                    autoComplete="off"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-6 pt-5 lg:pt-0">
                    <button
                      onClick={fetchCertificates}
                      className="p-3 lg:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full"
                    >
                      <Image
                        src={"/assets/newsletter/send.svg"}
                        alt="send-icon"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render the certificates */}
      {certificates.length > 0 && (
        <div className="mx-auto mt-10 mb-10 max-w-2xl space-y-6">
          {certificates.map((certificate) => (
            <div
              key={certificate._id}
              className="p-6 bg-paleblue shadow-lg rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold text-midnightblue">
                  {certificate.name}
                </h3>
                <p className="text-sm text-slategray">
                  Course: {certificate.courseName}
                </p>
              </div>
              <button
                className="px-4 py-2 bg-ultramarine text-white rounded-md hover:bg-midnightblue"
                onClick={() => handleDownloadClick(certificate)}
              >
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Hidden certificate template for printing */}
      <div className="hidden">
        {selectedCertificate && (
          <div className={styles.App}>
            <div className={styles.wrapper} id="certificate" ref={componentRef}>
              <div className={styles.certificate}>
                <div className={styles.header}>
                  <div className={styles.logo1}>
                    <img
                      src="/assets/logo_bg.png"
                      alt="Kumkum Training Centre"
                      className={styles.imageDiv}
                    />
                  </div>
                  <div className={styles.title}>CERTIFICATE OF COMPLETION</div>
                  <div className={styles.logo}>
                    <img
                      src="/assets/medal.png"
                      alt="Kumkum Training Centre"
                      className={styles.imageDiv}
                    />
                  </div>
                </div>

                <p>This certificate is presented to</p>

                <h1 className={styles.title}>{selectedCertificate.name}</h1>

                <div className={styles.content}>
                  We proudly acknowledge the successful completion of the{" "}
                  <strong>{selectedCertificate.courseName}</strong> course by
                  the candidate at our esteemed Kumkum Training Centre, located
                  at Nawada Thana, Ara, Bhojpur, Bihar. This achievement is the
                  result of dedicated study over a period of{" "}
                  <strong>{selectedCertificate.courseDuration}</strong>, during
                  the <strong>{selectedCertificate.session}</strong> session.
                  The candidate has demonstrated exceptional academic
                  performance by securing{" "}
                  <strong>{selectedCertificate.percentage}%</strong> marks,
                  earning a <strong>{selectedCertificate.grade}</strong> grade.
                </div>

                <div className={styles.footer} style={{marginTop:"150px"}}>
                  <p>
                    <strong>
                      Date of Issue:{" "}
                      {new Date(
                        selectedCertificate.dateOfIssue
                      ).toLocaleDateString()}
                    </strong>
                  </p>
                  <p>
                    <strong>Director, Kumkum Training Centre</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
