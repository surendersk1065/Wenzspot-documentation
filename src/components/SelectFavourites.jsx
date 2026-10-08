import React from "react";
import { Heart, Images, CheckCircle, Star } from "lucide-react";

const SelectFavourites = () => {
  return (
    <section>

      <h1 className="text-4xl font-bold mb-4">
        Select Favourites
      </h1>

      <p className="text-gray-500 mb-10">
        Save your favourite photographs and easily manage your selections.
      </p>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

        {/* Left Content */}
        <div className="lg:col-span-2">

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 mb-8">

            <div className="flex items-center gap-3 mb-3">
              <Heart className="text-orange-500" />

              <h2 className="font-semibold text-xl">
                Choose Your Favourite Photos
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Select the photographs you like from your event gallery by
              marking them as favourites. Your selected photos can be easily
              viewed together for quick access and review.
            </p>

          </div>

          <h2 className="text-xl font-bold mb-5">
            Favourite Photos
          </h2>

          <div className="space-y-4">

            <div className="border border-gray-200 rounded-xl p-5 flex gap-4">
              <Heart className="text-orange-500 shrink-0" />

              <div>
                <h3 className="font-semibold mb-1">
                  Mark as Favourite
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Click the favourite icon on any photograph you want to
                  save to your favourite collection.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 flex gap-4">
              <Images className="text-orange-500 shrink-0" />

              <div>
                <h3 className="font-semibold mb-1">
                  View Favourites
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Access all your selected photographs in one place
                  without searching through the entire gallery.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5 flex gap-4">
              <Star className="text-orange-500 shrink-0" />

              <div>
                <h3 className="font-semibold mb-1">
                  Review Your Selection
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Review your favourite photographs and make changes
                  to your selection whenever needed.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Workflow Card */}
        <div>
          <div className="border border-gray-200 rounded-xl p-6 sticky top-6">

            <h2 className="font-semibold text-lg mb-6">
              How to Select
            </h2>

            <div className="space-y-6">

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-semibold shrink-0">
                  1
                </div>

                <div>
                  <h3 className="font-medium mb-1">
                    Open the gallery
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Browse your event photographs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-semibold shrink-0">
                  2
                </div>

                <div>
                  <h3 className="font-medium mb-1">
                    Select a photograph
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Click the favourite icon.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-semibold shrink-0">
                  3
                </div>

                <div>
                  <h3 className="font-medium mb-1">
                    View your favourites
                  </h3>

                  <p className="text-gray-500 text-sm">
                    See all selected photos together.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-sm font-semibold shrink-0">
                  4
                </div>

                <div>
                  <h3 className="font-medium mb-1">
                    Update selection
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Add or remove photos anytime.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Final Selection */}
      <div className="border border-gray-200 rounded-xl p-6 mb-8">

        <div className="flex items-center gap-3 mb-3">
          <CheckCircle className="text-orange-500" />

          <h2 className="font-semibold text-lg">
            Final Selection
          </h2>
        </div>

        <p className="text-gray-500 leading-relaxed">
          Keep your preferred photographs organized and ready for
          the next step in your photo workflow.
        </p>

      </div>

      {/* Tip */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">

        <h3 className="font-semibold mb-2">
          Tip
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          Use favourites to quickly collect the photographs you like
          most instead of repeatedly searching through the complete
          event gallery.
        </p>

      </div>

    </section>
  );
};

export default SelectFavourites;