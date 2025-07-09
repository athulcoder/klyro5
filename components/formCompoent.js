"use client";
import LoadingScreen from "@/components/LoadingScreen";
import PhoneNumberInput from "@/components/PhoneInput";
import PhoneInput from "@/components/PhoneInput";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { useRef, useState } from "react";

const steps = [
  "Introduction",
  "Basic Information",
  "Organization Details",
  "Website Requirements & Uploads",
];

const pageOptions = [
  "Home",
  "About",
  "Blogs",
  "Gallery",
  "Services",
  "Works",
  "Contact",
  "FAQ",
  "Other",
];

const styleOptions = [
  "Modern and Clean",
  "Professional and Corporate",
  "Creative and Bold",
  "Fun and Playful",
  "Minimalist",
  "Dark Mode / High Contrast",
  "Vintage or Retro",
  "Other",
];

export default function FormComponent() {
  const [submitLoading, setSubmitLoading] = useState(false);
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [submitStatus, setSubmitStatus] = useState(true);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    companyDescription: "",
    instagramLink: "",
    facebookLink: "",
    githubLink: "",
    linkedinLink: "",
    x: "",
    pagesRequired: [],
    domainName: "",
    websiteStyle: "",
    uploadNotes: "",
    fileUrls: [], // Store multiple files here
  });

  const [formErrors, setFormErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (type === "checkbox" && name === "pagesRequired") {
      setFormData((prev) => ({
        ...prev,
        pagesRequired: checked
          ? [...prev.pagesRequired, value]
          : prev.pagesRequired.filter((p) => p !== value),
      }));
    } else if (type !== "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error on change for that field
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  // Handle multi-file uploads with validation and animation
  const handleMultiFileChange = (e) => {
    const files = Array.from(e.target.files);

    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/webp",
      "video/mp4",
      "video/webm",
      "video/ogg",
      "application/pdf",
    ];

    const filteredFiles = files.filter((file) =>
      validTypes.includes(file.type)
    );

    if (filteredFiles.length !== files.length) {
      alert("Some files were excluded because they are not valid file types.");
    }

    if (filteredFiles.length === 0) return;

    setUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        fileUrls: [...prev.fileUrls, ...filteredFiles],
      }));
      setUploading(false);
    }, 1500);
  };

  const handleRemoveFile = (index) => {
    setFormData((prev) => {
      const updated = [...prev.fileUrls];
      updated.splice(index, 1);
      return { ...prev, fileUrls: updated };
    });

    // Reset file input to allow re-selection of the same files
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleNext = () => {
    const errors = {};

    if (step === 1) {
      if (!formData.fullName) errors.fullName = "Full name is required.";
      if (formData.phone.length < 12)
        errors.phone = "Phone number is required.";
      if (!formData.email) errors.email = "Email address is required.";
    }

    if (step === 2) {
      if (!formData.companyName)
        errors.companyName = "Company name is required.";
      if (!formData.companyAddress)
        errors.companyAddress = "Company address is required.";
      if (!formData.companyEmail)
        errors.companyEmail = "Company email is required.";
      if (!formData.companyDescription)
        errors.companyDescription = "Company description is required.";
      if (!formData.instagramLink)
        errors.instagramLink = "instagramLink link is required.";
    }

    if (step === 3) {
      if (formData.pagesRequired.length === 0)
        errors.pagesRequired = "Select at least one page.";
      if (!formData.domainName) errors.domainName = "Domain name is required.";
      if (!formData.websiteStyle)
        errors.websiteStyle = "Please choose a websiteStyle.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setFormErrors({});
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // final level validation

    const errors = {};

    // Add final validations here if needed
    if (step === 3) {
      if (formData.pagesRequired.length === 0)
        errors.pagesRequired = "Select at least one page.";
      if (!formData.domainName) errors.domainName = "Domain name is required.";
      if (!formData.websiteStyle)
        errors.websiteStyle = "Please choose a websiteStyle.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitLoading(true);
      console.log("Form submitted", formData);

      const res = await fetch("/api/verify", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      setSubmitLoading(false);
      if (data.success) {
        router.push("/");
        setSubmitStatus(true);
      }
    }
  };
  if (submitLoading) return <LoadingScreen />;
  else if (submitStatus) return <></>;
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">Klyro5 Project Form</h2>
          <p className="text-sm text-gray-400">
            Step {step + 1} of {steps.length} – {steps[step]}
          </p>

          {step > 0 && (
            <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-500 transition-all duration-300"
                style={{
                  width: `${((step + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          )}
        </header>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* STEP 1: INTRO */}
          {step === 0 && (
            <div className="space-y-4 text-gray-300">
              <p>
                Thank you for your interest in working with{" "}
                <strong>Klyro5</strong>!
              </p>
              <p>
                We specialize in delivering high-quality, custom website
                development services tailored to your business goals.
              </p>
              <p>
                Please fill out this form to help us better understand your
                needs, objectives, and preferences. This will allow our team to
                craft the perfect web solution for you.
              </p>
              <p>We look forward to building something great together!</p>
            </div>
          )}

          {/* STEP 2: BASIC INFO */}
          {step === 1 && (
            <>
              <SectionTitle title="Basic Information" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="fullName"
                  label="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  error={formErrors.fullName}
                />
                <PhoneNumberInput
                  name="phone"
                  label="Phone"
                  require
                  value={formData.phone}
                  onChange={handleChange}
                  error={formErrors.phone}
                />
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  error={formErrors.email}
                />
              </div>
            </>
          )}

          {/* STEP 3: ORGANIZATION DETAILS */}
          {step === 2 && (
            <>
              <SectionTitle title="Organization Details" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="companyName"
                  label="Company Name"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  error={formErrors.companyName}
                />
                <Input
                  name="companyAddress"
                  label="Company Address"
                  required
                  value={formData.companyAddress}
                  onChange={handleChange}
                  error={formErrors.companyAddress}
                />
                <Input
                  name="companyEmail"
                  label="Company Email"
                  type="email"
                  required
                  value={formData.companyEmail}
                  onChange={handleChange}
                  error={formErrors.companyEmail}
                />
                <Textarea
                  name="companyDescription"
                  label="Company Description"
                  required
                  value={formData.companyDescription}
                  onChange={handleChange}
                  error={formErrors.companyDescription}
                />
              </div>

              <SectionTitle title="Social Media Links" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="instagramLink"
                  label="instagramLink"
                  required
                  value={formData.instagramLink}
                  onChange={handleChange}
                  error={formErrors.instagramLink}
                />
                <Input
                  name="facebookLink"
                  label="facebookLink"
                  value={formData.facebookLink}
                  onChange={handleChange}
                />
                <Input
                  name="githubLink"
                  label="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                />
                <Input
                  name="linkedinLink"
                  label="linkedinLink"
                  value={formData.linkedinLink}
                  onChange={handleChange}
                />
                <Input
                  name="x"
                  label="X (formerly Twitter)"
                  value={formData.x}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* STEP 4: WEBSITE REQUIREMENTS */}
          {step === 3 && (
            <>
              <SectionTitle title="Website Requirements" />

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Pages Required (check all that apply):
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {pageOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        name="pagesRequired"
                        value={option}
                        checked={formData.pagesRequired.includes(option)}
                        onChange={handleChange}
                        className="accent-blue-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {formErrors.pagesRequired && (
                  <span className="text-red-500 text-sm">
                    {formErrors.pagesRequired}
                  </span>
                )}
              </div>

              <Input
                name="domainName"
                label="Preferred Domain Name (e.g., yourcompanyname.com)"
                value={formData.domainName}
                onChange={handleChange}
                error={formErrors.domainName}
              />

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  What kind of websiteStyle are you aiming for?
                </label>
                <div className="space-y-1">
                  {styleOptions.map((websiteStyle) => (
                    <label
                      key={websiteStyle}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="radio"
                        name="websiteStyle"
                        value={websiteStyle}
                        checked={formData.websiteStyle === websiteStyle}
                        onChange={handleChange}
                        className="accent-blue-500"
                      />
                      {websiteStyle}
                    </label>
                  ))}
                </div>
                {formErrors.websiteStyle && (
                  <span className="text-red-500 text-sm">
                    {formErrors.websiteStyle}
                  </span>
                )}
              </div>

              <SectionTitle title="Media Uploads (Optional)" />
              <p className="text-sm text-gray-400 mb-2">
                Upload images, videos, or PDFs you’d like us to use on the
                website. You can select multiple files at once.
              </p>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*,.pdf"
                onChange={handleMultiFileChange}
                className="mb-4 truncate"
              />

              {uploading && (
                <div className="flex items-center gap-2 text-blue-400 mb-4">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                  <span>Uploading files...</span>
                </div>
              )}

              {formData.fileUrls.length > 0 && (
                <div className="space-y-2 max-h-48 overflow-y-auto ">
                  {formData.fileUrls.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-gray-800 rounded px-3 py-2 "
                    >
                      <div className="flex items-center gap-3">
                        {file.type.startsWith("image/") ? (
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="h-10 w-10 object-cover rounded"
                          />
                        ) : file.type.startsWith("video/") ? (
                          <svg
                            className="h-8 w-8 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10 16.5l6-4.5-6-4.5v9z" />
                            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 18V6h16v12H4z" />
                          </svg>
                        ) : (
                          // Document icon for PDFs and other docs
                          <svg
                            className="h-8 w-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 2h8l5 5v13a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 2v6h6"
                            />
                          </svg>
                        )}

                        <span className="truncate max-w-xs text-sm text-wrap">
                          {file.name}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => {
                          handleRemoveFile(idx);
                        }}
                        className="text-red-500 hover:text-red-700 text-lg font-bold"
                        aria-label={`Remove ${file.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <Textarea
                name="uploadNotes"
                label="Any notes or details about your uploads?"
                value={formData.uploadNotes}
                onChange={handleChange}
              />
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className={`px-6 py-2 rounded border ${
                step === 0
                  ? "border-gray-600 text-gray-500 cursor-not-allowed"
                  : "border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white"
              } transition`}
            >
              Back
            </button>

            {step < steps.length - 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 rounded bg-blue-500 hover:bg-blue-600 transition"
              >
                Next
              </button>
            )}

            {step === steps.length - 1 && (
              <button
                type="submit"
                className="px-6 py-2 rounded bg-green-600 hover:bg-green-700 transition"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable Input component
function Input({
  name,
  label,
  type = "text",
  required,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full rounded border bg-gray-800 border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

// Reusable Textarea component
function Textarea({ name, label, required, value, onChange, error }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        rows={4}
        className={`w-full rounded border bg-gray-800 border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function SectionTitle({ title }) {
  return <h3 className="text-xl font-semibold text-gray-100 mb-4">{title}</h3>;
}
