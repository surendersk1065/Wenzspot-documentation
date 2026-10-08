
import React from "react";
import { Camera, Users, Sparkles } from "lucide-react";

const Introduction = ({ setActive }) => {
  return (
    <section>

      <h1 className="text-4xl font-bold mb-4">
        Introduction
      </h1>

      <p className="text-gray-500 mb-10">
        Your complete guide to using Webzspot Studio.
      </p>

      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-10">

        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="text-orange-500" />

          <h2 className="font-semibold text-xl">
            Welcome to Webzspot
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          A smarter way to manage event photography,
          client selections, editing, and photo delivery.
        </p>

      </div>

      <h2 className="text-xl font-bold mb-5">
        Explore the guides
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <button
          onClick={() => setActive("Create Studio")}
          className="border border-gray-200 rounded-xl p-6 text-left hover:border-orange-400 transition"
        >
          <Camera className="text-orange-500 mb-4" />

          <h3 className="font-semibold mb-2">
            Photographers
          </h3>

          <p className="text-gray-500 text-sm">
            Learn how to manage event photos and galleries.
          </p>
        </button>

        <button
          onClick={() => setActive("View Gallery")}
          className="border border-gray-200 rounded-xl p-6 text-left hover:border-orange-400 transition"
        >
          <Users className="text-orange-500 mb-4" />

          <h3 className="font-semibold mb-2">
            Clients
          </h3>

          <p className="text-gray-500 text-sm">
            Learn how to explore and select your photos.
          </p>
        </button>

      </div>

    </section>
  );
};

export default Introduction;
