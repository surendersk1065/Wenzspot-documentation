import React from "react";
import { Images, Eye, Heart, Download } from "lucide-react";

const ViewGallery = () => {
  return (
    <section>

      <h1 className="text-4xl font-bold mb-4">
        View Gallery
      </h1>

      <p className="text-gray-500 mb-10">
        Browse, view, and select photographs from your event gallery.
      </p>

      {/* Welcome Card */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-10">

        <div className="flex items-center gap-3 mb-3">
          <Images className="text-orange-500" />

          <h2 className="font-semibold text-xl">
            Your Event Gallery
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed">
          View photographs uploaded by your photographer in one place.
          Browse your event photos, preview individual images, and select
          the photographs you want.
        </p>

      </div>

      {/* How to use */}
      <h2 className="text-xl font-bold mb-5">
        Using the Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

        {/* Browse Photos */}
        <div className="border border-gray-200 rounded-xl p-6">

          <Eye className="text-orange-500 mb-4" />

          <h3 className="font-semibold mb-2">
            Browse Photos
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Browse through all the photographs uploaded to your event
            gallery and open any image to view it in detail.
          </p>

        </div>

        {/* Select Photos */}
        <div className="border border-gray-200 rounded-xl p-6">

          <Heart className="text-orange-500 mb-4" />

          <h3 className="font-semibold mb-2">
            Select Photos
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Select your favorite photographs and create a collection
            of the images you want to keep or share.
          </p>

        </div>

        {/* Download Photos */}
        <div className="border border-gray-200 rounded-xl p-6">

          <Download className="text-orange-500 mb-4" />

          <h3 className="font-semibold mb-2">
            Download Photos
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Download photographs when the photographer has enabled
            downloads for your event gallery.
          </p>

        </div>

        {/* View Details */}
        <div className="border border-gray-200 rounded-xl p-6">

          <Images className="text-orange-500 mb-4" />

          <h3 className="font-semibold mb-2">
            View Full Image
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Click on any photograph to open a larger preview and
            view the image clearly.
          </p>

        </div>

      </div>

      {/* Steps */}
      <h2 className="text-xl font-bold mb-5">
        How to View Your Gallery
      </h2>

      <div className="space-y-4 mb-10">

        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-semibold shrink-0">
            1
          </div>

          <div>
            <h3 className="font-semibold mb-1">
              Open your gallery
            </h3>

            <p className="text-gray-500 text-sm">
              Use the gallery link provided by your photographer to
              access your event photos.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-semibold shrink-0">
            2
          </div>

          <div>
            <h3 className="font-semibold mb-1">
              Browse the photographs
            </h3>

            <p className="text-gray-500 text-sm">
              Scroll through the gallery and choose the photographs
              you want to view.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-semibold shrink-0">
            3
          </div>

          <div>
            <h3 className="font-semibold mb-1">
              Select your photos
            </h3>

            <p className="text-gray-500 text-sm">
              Mark your preferred photographs if photo selection is
              enabled for the gallery.
            </p>
          </div>
        </div>

      </div>

      {/* Note */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">

        <h3 className="font-semibold mb-2">
          Note
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          Available features may vary depending on the photographer's
          gallery settings. Some galleries may allow only viewing,
          while others may also allow photo selection and downloads.
        </p>

      </div>

    </section>
  );
};

export default ViewGallery;
