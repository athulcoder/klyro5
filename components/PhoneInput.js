"use client";

import { useState } from "react";
import PhoneNUmberInput from "react-phone-input-2";
const PhoneInput = PhoneNUmberInput.default;
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberInput({
  name = "phone",
  label = "Phone Number",
  required = false,
  error,
  onChange,
  value,
}) {
  const [phone, setPhone] = useState(value || "");

  const handleChange = (val) => {
    setPhone(val);
    onChange && onChange({ target: { name, value: val } });
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-300 mb-1"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <PhoneInput
        inputProps={{
          name,
          required,
          id: name,
          className: `w-full rounded border bg-gray-800 border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : ""
          }`,
        }}
        country={"us"}
        value={phone}
        onChange={handleChange}
        specialLabel={""} // Hide react-phone-input-2's built-in label
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
