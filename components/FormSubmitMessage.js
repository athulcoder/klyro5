import React from "react";
import { CheckCircle } from "lucide-react";

function FormSubmitMessage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-2xl shadow-md max-w-md mx-auto mt-10 text-white">
      <CheckCircle className="text-green-500 w-12 h-12 mb-3" />
      <h2 className="text-xl font-semibold mb-1">Thank you!</h2>
      <p className="text-center text-gray-300 text-sm">
        Your form has been submitted successfully. <br />
        Our team will contact you as soon as possible...
      </p>
    </div>
  );
}

export default FormSubmitMessage;
