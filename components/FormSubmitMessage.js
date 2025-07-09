import React from "react";
import { CheckCircle } from "lucide-react";

function FormSubmitMessage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md max-w-md mx-auto mt-10">
      <CheckCircle className="text-green-600 w-20 h-20 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Thank you!</h2>
      <p className="text-center text-gray-600">
        Your form has been successfully submitted. <br />
        Our team will get in touch with you as soon as possible.
      </p>
    </div>
  );
}

export default FormSubmitMessage;
