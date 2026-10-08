
import React from "react";

import ViewGallery from "./ViewGallery";
import SelectFavourites from "./SelectFavourites";
import AIPhotoSearch from "./AIPhotoSearch";
import DownloadPhotos from "./DownloadPhotos";

const Client = ({ active }) => {
  return (
    <section>

      {active === "View Gallery" && <ViewGallery />}

      {active === "Select Favourites" && <SelectFavourites />}

      {active === "AI Photo Search" && <AIPhotoSearch />}

      {active === "Download Photos" && <DownloadPhotos />}

    </section>
  );
};

export default Client;
