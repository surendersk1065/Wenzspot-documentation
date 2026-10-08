
import React from "react";

const QuickStart = () => {

  const steps = [
    "Photographer creates an event gallery.",
    "Photographer uploads event photographs.",
    "Client accesses the event gallery.",
    "Client selects favourite photographs.",
    "Photographer edits the selected photos.",
    "Final photographs are delivered to the client.",
  ];

  return (
    <section>

      <h1 className="text-4xl font-bold mb-4">
        Quick Start
      </h1>

      <p className="text-gray-500 mb-10">
        Understand how Webzspot Studio works.
      </p>

      <h2 className="text-xl font-semibold mb-6">
        Step-by-step workflow
      </h2>

      <div className="space-y-4">

        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border border-gray-200 rounded-xl p-5"
          >
            <div className="bg-orange-100 text-orange-600 font-bold rounded-lg px-3 py-2">
              {index + 1}
            </div>

            <p className="text-gray-700 pt-2">
              {step}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default QuickStart;
