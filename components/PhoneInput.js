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
        onlyCountries={[
          "in",
          "us",
          "cn",
          "pk",
          "ae",
          "sa",
          "kw",
          "bh",
          "qa",
          "om", // Gulf
          "il",
          "ru",
          "ie",
          "gb", // Individual countries
          "at",
          "be",
          "bg",
          "hr",
          "cy",
          "cz",
          "dk",
          "ee",
          "fi",
          "fr",
          "de",
          "gr",
          "hu",
          "it",
          "lv",
          "lt",
          "lu",
          "nl",
          "pl",
          "pt",
          "ro",
          "sk",
          "si",
          "es",
          "se", // European countries
        ]}
        dropdownStyle={{ backgroundColor: "#2d3748" }}
        buttonStyle={{ backgroundColor: "#2d3748" }}
        dropdownClass="bg-gray-700"
        containerStyle={{ backgroundColor: "blue" }}
        inputProps={{
          name,
          required,
          id: name,
          className: `w-full ml-[35px] rounded border bg-gray-800 border-gray-700 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : ""
          }`,
        }}
        country={"in"}
        value={phone}
        onChange={handleChange}
        specialLabel={""} // Hide react-phone-input-2's built-in label
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
