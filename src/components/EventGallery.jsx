
import React, { useEffect, useRef } from "react";
import s4 from "../assets/s4.png";
import v3 from "../assets/v3.mp4"

const EventGallery = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section>

      {/* MAIN HEADING */}
      <h1 className="text-4xl font-bold mb-4">
        Event Gallery
      </h1>

      <p className="text-gray-500 mb-10">
        Organize, manage, and publish event photographs
        for your clients.
      </p>

      {/* INTRODUCTION */}
      <h2 className="text-xl font-semibold mb-4">
        Getting Started
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Webzspot Studio provides a dedicated Event Gallery
        where photographers can manage hundreds of event
        photographs in one place. Clients can browse the
        gallery, select their favourite photos, and access
        the final edited images.
      </p>

      {/* EVENT GALLERY */}
      <h2 className="text-3xl font-semibold mb-6">
        Event Gallery Overview
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        After uploading photographs, all the images will
        be displayed in the Event Gallery. Whether an
        event contains 100, 500, or more photographs,
        the gallery helps photographers organize and
        manage them efficiently.
      </p>

      {/* GALLERY IMAGE */}
      <img
        src={s4}
        alt="Webzspot Studio Event Gallery"
        className="w-full rounded-xl mb-10"
      />

      {/* STEPS */}
      <div>

        <h2 className="text-3xl font-semibold mb-6">
          How to Manage the Event Gallery
        </h2>

        <ol className="list-decimal pl-6 space-y-6 text-gray-700 leading-relaxed">

          {/* STEP 1 */}
          <li>
            <strong>View Uploaded Photographs:</strong>{" "}
            After uploading photos, navigate to the
            Event Gallery to view all the photographs
            associated with your event. The gallery
            can contain hundreds of images, depending
            on your subscription plan.
          </li>

          {/* STEP 2 */}
          <li>
            <strong>Client Gallery Access:</strong>{" "}
            Clients can access their event gallery
            to browse and view the photographs
            uploaded by the photographer.
          </li>

          {/* STEP 3 */}
          <li>
            <strong>Select Favourite Photos:</strong>{" "}
            Clients can select and save their favourite
            photographs from the gallery. These selections
            help the photographer identify the images
            that clients want to be edited or enhanced.
          </li>

          {/* STEP 4 */}
          <li>
            <strong>Edit and Enhance Photographs:</strong>{" "}
            The photographer can view the photos selected
            by clients and edit or enhance them according
            to their requirements.
          </li>

          {/* STEP 5 */}
          <li>
            <strong>Upload Edited Photographs:</strong>{" "}
            Once the editing process is complete, the
            photographer can upload the final edited
            photographs back to the Event Gallery
            for client viewing.
          </li>

          {/* STEP 6 */}
          <li>
            <strong>Publish the Event:</strong>{" "}
            Locate the <strong>Publish Event</strong>{" "}
            button in the top-right corner of the
            Event Gallery. Click the button to publish
            the event photographs and make them
            available for clients to view.
          </li>

        </ol>

        <video
          ref={videoRef}
          src={v3}
          controls
          muted
          playsInline
          loop
          preload="metadata"
          className="w-full rounded-xl mt-6"
        />

      </div>

    </section>
  );
};

export default EventGallery;
