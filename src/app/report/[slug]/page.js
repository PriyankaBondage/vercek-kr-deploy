
"use client";

import React from "react";

function Report({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug); 
  return (
    <div className="flex justify-center items-center mt-28 bg-gray-100">
      <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Report Data</h2>
        <div className="bg-gray-200 p-4 rounded-lg">
          <p className="text-xl font-bold text-gray-700">Title:</p>
          <p className="text-gray-600 mt-2">{decodedSlug}</p>
        </div>
      </div>
    </div>
  );
}

export default Report;
