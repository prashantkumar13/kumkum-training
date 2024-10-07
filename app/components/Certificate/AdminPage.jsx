"use client";

import React, { useEffect, useState } from "react";

const AdmissionsPage = ({hideCertificate}) => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [formValues, setFormValues] = useState({
    name: "",
    fatherName: "",
    courseName: "",
    fees: "",
    aadhar: "",
    verified: false,
    phoneNumber: "",
    session: "",
    courseDuration: "",
    grade: "",
    percentage: "",
  });

  useEffect(() => {
    fetch("https://kumkum-training-backend.vercel.app/admission/get")
      .then((response) => response.json())
      .then((data) => {
        setAdmissions(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching admissions:", error);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEditClick = (admission) => {
    setSelectedAdmission(admission);
    setFormValues({
      name: admission.name,
      fatherName: admission.fatherName,
      courseName: admission.courseName,
      fees: admission.fees,
      aadhar: admission.aadhar,
      verified: admission.verified,
      phoneNumber: admission.phoneNumber,
      session: admission.session,
      courseDuration: admission.courseDuration,
      grade: admission.grade,
      percentage: admission.percentage,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate that the aadhaar field is not empty
    if (!formValues.aadhar || formValues.aadhar.trim() === "") {
      console.error("Aadhaar field cannot be empty");
      alert("Aadhaar field cannot be empty");
      return;
    }

    const url = selectedAdmission
      ? `https://kumkum-training-backend.vercel.app/admission/admissions/${selectedAdmission._id}`
      : "https://kumkum-training-backend.vercel.app/admission/admissions";

    const method = selectedAdmission ? "PUT" : "POST";

    // Prepare the data to match the schema requirements
    const requestData = {
      name: formValues.name.trim(),
      courseName: formValues.courseName.trim(),
      aadhar: formValues.aadhar.trim(),
      verified: !!formValues.verified, // Ensure verified is always boolean (true/false)
    };

    // Optional fields: Only include if they have values
    if (formValues.fatherName.trim())
      requestData.fatherName = formValues.fatherName.trim();
    if (formValues.fees) requestData.fees = Number(formValues.fees);
    if (formValues.phoneNumber.trim())
      requestData.phoneNumber = formValues.phoneNumber.trim();
    if (formValues.session.trim())
      requestData.session = formValues.session.trim();
    if (formValues.courseDuration.trim())
      requestData.courseDuration = formValues.courseDuration.trim();
    if (formValues.grade.trim()) requestData.grade = formValues.grade.trim();
    if (formValues.percentage)
      requestData.percentage = Number(formValues.percentage);

    console.log("Submitting data:", requestData); // Log the request data for debugging

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          // If the response is not OK, log the status and response for debugging
          return response.json().then((err) => {
            console.error("Server response:", err);
            throw new Error(`Request failed with status ${response.status}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (selectedAdmission) {
          setAdmissions((prev) =>
            prev.map((admission) =>
              admission._id === selectedAdmission._id ? data : admission
            )
          );
        } else {
          setAdmissions((prev) => [...prev, data]);
        }
        setSelectedAdmission(null);
        setFormValues({
          name: "",
          fatherName: "",
          courseName: "",
          fees: "",
          aadhar: "",
          verified: false,
          phoneNumber: "",
          session: "",
          courseDuration: "",
          grade: "",
          percentage: "",
        });
      })
      .catch((error) => {
        console.error("Error saving admission:", error);
      });
  };

  const toggleVerified = (admission) => {
    const updatedAdmission = { ...admission, verified: !admission.verified };

    fetch(
      `https://kumkum-training-backend.vercel.app/admission/admissions/${admission._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedAdmission),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setAdmissions((prev) =>
          prev.map((adm) =>
            adm._id === admission._id
              ? { ...adm, verified: data.verified }
              : adm
          )
        );
      })
      .catch((error) =>
        console.error("Error toggling verified status:", error)
      );
  };

  const filteredAdmissions = admissions.filter(
    (admission) =>
      admission.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      "" ||
      admission.aadhaar?.includes(searchTerm) ||
      ""
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so add 1
    const day = String(date.getDate()).padStart(2, "0");

    // Return formatted date
    return `${year}-${month}-${day}`;
  };

  const ShimmerCard = () => (
    <div className="bg-paleblue shadow-lg rounded-lg p-6 animate-pulse gap-20">
      <div className="h-6 bg-slategray rounded w-3/4 mb-8"></div>
      <div className="h-4 bg-slategray rounded w-5/6 mb-4"></div>
      <div className="h-4 bg-slategray rounded w-5/6 mb-4"></div>
      <div className="h-4 bg-slategray rounded w-2/3 mb-4"></div>
      <div className="h-4 bg-slategray rounded w-2/3 mb-4"></div>
      <div className="h-4 bg-slategray rounded w-2/3 mb-4"></div>
      <div className="h-4 bg-kellygreen rounded w-1/2 mb-4"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-lightkblue flex flex-col items-center p-6">
    
      <h1 className="text-4xl font-bold text-midnightblue mb-8" onClick={hideCertificate}>Admissions</h1>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        {/* Form on the left */}
        <div className="w-full lg:w-1/3 p-4">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-3xl font-bold text-midnightblue mb-6">
              {selectedAdmission ? "Edit Admission" : "Create Admission"}
            </h2>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Father&apos;s Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formValues.fatherName}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Course Name
              </label>
              <input
                type="text"
                name="courseName"
                value={formValues.courseName}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">Fees</label>
              <input
                type="number"
                name="fees"
                value={formValues.fees}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Aadhaar
              </label>
              <input
                type="text"
                name="aadhar"
                value={formValues.aadhar}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Session
              </label>
              <input
                type="text"
                name="session"
                value={formValues.session}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Course Duration
              </label>
              <input
                type="text"
                name="courseDuration"
                value={formValues.courseDuration}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Grade
              </label>
              <input
                type="text"
                name="grade"
                value={formValues.grade}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Percentage
              </label>
              <input
                type="number"
                name="percentage"
                value={formValues.percentage}
                onChange={handleInputChange}
                className="w-full p-3 border border-charcoal rounded-md focus:outline-none focus:ring-2 focus:ring-kellygreen"
              />
            </div>
            <div className="mb-4">
              <label className="block text-slategray font-semibold">
                Want to provide certificate?
              </label>
              <input
                type="checkbox"
                name="verified"
                checked={formValues.verified}
                onChange={handleInputChange}
                className="mr-2"
              />
              Yes
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-kellygreen text-white rounded-md hover:bg-charcoal transition-all"
            >
              {selectedAdmission ? "Update Admission" : "Create Admission"}
            </button>
          </form>
        </div>

        {/* Admission cards on the right */}
        <div className="w-full lg:w-2/3 p-4">
          <input
            type="text"
            placeholder="Search by name or Aadhar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-8 p-4 border border-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-kellygreen text-base w-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {loading ? (
              <>
                <ShimmerCard />
                <ShimmerCard />
              </>
            ) : filteredAdmissions.length > 0 ? (
              filteredAdmissions.map((admission) => (
                <div
                  key={admission._id}
                  className="bg-paleblue shadow-lg rounded-lg p-6"
                >
                  <h2 className="text-2xl font-bold text-midnightblue mb-2">
                    {admission.name}
                  </h2>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Aadhaar:</span>{" "}
                    {admission.aadhar}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Father&apos;s Name:</span>{" "}
                    {admission.fatherName}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Course Name:</span>{" "}
                    {admission.courseName}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Fees:</span> ₹
                    {admission.fees}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Phone Number:</span>{" "}
                    {admission.phoneNumber}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Session:</span>{" "}
                    {admission.session}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Course Duration:</span>{" "}
                    {admission.courseDuration}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Grade:</span>{" "}
                    {admission.grade}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Percentage:</span>{" "}
                    {admission.percentage}%
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Date of Admission:</span>{" "}
                    {formatDate(admission.createdAt).slice(0, 10)}
                  </p>
                  <p className="text-slategray mb-1">
                    <span className="font-semibold">Date of Issue:</span>{" "}
                    {formatDate(admission.dateOfIssue).slice(0, 10)}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => handleEditClick(admission)}
                      className="px-4 py-2 bg-cornflowerblue text-white rounded-md hover:bg-charcoal transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleVerified(admission)}
                      className={`px-4 py-2 rounded-md transition-all ${
                        admission.verified
                          ? " bg-kellygreen text-white hover:bg-darkgray"
                          : "bg-red text-white hover:bg-charcoal"
                      }`}
                    >
                      {admission.verified ? "Provided" : "Not Provided"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-darkgray text-xl">No students found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
