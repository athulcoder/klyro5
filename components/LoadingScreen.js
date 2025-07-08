import React from "react";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="h-12 w-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default LoadingScreen;
