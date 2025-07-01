"use client";
import { useState } from "react";

const steps = ["Intro", "Basic Info", "Project Overview", "Social Media"];

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    companyAddress: "",
    companyDesc: "",
    companyEmail: "",
    logo: null,
    content: null,
    pagesRequired: "",
    domainName: "",
    style: "",
    instagram: "",
    facebook: "",
    github: "",
    linkedin: "",
    x: "",
    companyMobile: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleNext = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">Klyro5 Project Form</h2>
          <p className="text-sm text-gray-400">
            Step {step + 1} of {steps.length} – {steps[step]}
          </p>
          <div className="mt-3 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-500 transition-all duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step Sections */}
          {step === 0 && (
            <div>
              <p className="text-gray-300">
                We specialize in high-quality, custom websites. Please fill out
                this form to help us understand your goals.
              </p>
            </div>
          )}

          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="fullName"
                label="Full Name"
                required
                onChange={handleChange}
              />
              <Input
                name="phone"
                label="Phone Number"
                required
                onChange={handleChange}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                required
                onChange={handleChange}
              />
            </div>
          )}

          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="companyName"
                label="Company Name"
                required
                onChange={handleChange}
              />
              <Input
                name="companyAddress"
                label="Company Address"
                required
                onChange={handleChange}
              />
              <Textarea
                name="companyDesc"
                label="About Your Company"
                required
                onChange={handleChange}
              />
              <Input
                name="companyEmail"
                label="Company Email"
                type="email"
                required
                onChange={handleChange}
              />
              <Input
                name="logo"
                label="Company Logo"
                type="file"
                onChange={handleChange}
              />
              <Input
                name="content"
                label="Website Content"
                type="file"
                onChange={handleChange}
              />
              <Input
                name="pagesRequired"
                label="Pages Required"
                onChange={handleChange}
              />
              <Input
                name="domainName"
                label="Preferred Domain"
                onChange={handleChange}
              />
              <Input
                name="style"
                label="Style / Reference Sites"
                onChange={handleChange}
              />
            </div>
          )}

          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="instagram"
                label="Instagram Profile"
                required
                onChange={handleChange}
              />
              <Input
                name="facebook"
                label="Facebook Profile"
                onChange={handleChange}
              />
              <Input
                name="github"
                label="GitHub Profile"
                onChange={handleChange}
              />
              <Input
                name="linkedin"
                label="LinkedIn Profile"
                onChange={handleChange}
              />
              <Input
                name="x"
                label="X (Twitter) Profile"
                onChange={handleChange}
              />
              <Input
                name="companyMobile"
                label="Company Mobile"
                required
                onChange={handleChange}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            {step > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
              >
                Back
              </button>
            )}
            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
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

// Basic Input
function Input({ name, label, type = "text", required, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        onChange={onChange}
        className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
      />
    </div>
  );
}

// Basic Textarea
function Textarea({ name, label, required, onChange }) {
  return (
    <div className="flex flex-col col-span-2">
      <label htmlFor={name} className="text-sm text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        name={name}
        required={required}
        onChange={onChange}
        rows={4}
        className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
      />
    </div>
  );
}
