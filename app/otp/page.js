"use client";

import { useRef, useState } from "react";

export default function OtpPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);
    if (val && i < 3) inputRefs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !otp[i] && i > 0)
      inputRefs.current[i - 1]?.focus();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 text-white p-6 rounded-xl w-full max-w-sm text-center">
        <h1 className="text-xl font-semibold mb-4">Enter OTP</h1>
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((val, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 text-xl text-center bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={val}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
            />
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
          Verify
        </button>
      </div>
    </div>
  );
}
