import React from 'react';
import { useParams } from 'react-router-dom';

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Case Study {id}</h1>
        <p className="text-gray-300 mb-8">Case study details are being loaded...</p>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Study Overview</h2>
          <p className="text-gray-300">
            This is a placeholder for case study {id}. The full case study content will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
}