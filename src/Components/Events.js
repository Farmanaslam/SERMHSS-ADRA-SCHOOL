import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs"
import {
  FolderIcon,
  ArrowsPointingOutIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

export default function Events() {
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  let allImgSrcs = [];
  const hostPath = `${window.location.protocol}//${window.location.hostname}`
  // const hostPath = `${window.location.protocol}//localhost`;

  const eventsPath = `${hostPath}/events.php?loc=${
    searchParams.get("loc") ? searchParams.get("loc") : "events"
  }`;


  useEffect(() => {
    fetch(eventsPath)
      .then((res) => res.json())
      .then((data) => {
        setData({
          folders: data.folders,
          files: data.files,
          about: data.about,
        });
      });

    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 37) {
        document.querySelector(".view-prev").click();
      } else if (e.keyCode == 39) {
        document.querySelector(".view-next").click();
      } else if (e.keyCode == 27) {
        document.querySelector(".view-image").click();
      }
    });

    const currentLoc = searchParams.get("loc");
    const currentTitle =
      currentLoc.split("~")[currentLoc.split("~").length - 1];

    const innerHeading = document.querySelector(".inner-heading");

    if (innerHeading) {
        if (currentTitle && currentTitle != "events") {
            innerHeading.textContent = currentTitle.replace("/", "");
            innerHeading.classList.remove("hidden");
          } else {
            innerHeading.textContent = "";
            innerHeading.classList.add("hidden");
          }
    }
  }, [searchParams.get("loc")]);

  function handleFolderClick(e, location) {
    let param = location.split("?")[1].split("=")[1].split("&")[0];
    setSearchParams({ loc: param });
  }

  function handleImageClick(e) {
    const viewImageDiv = document.querySelector(".view-image");
    viewImageDiv.innerHTML = `<img src="${e.target.src}" />`;
    viewImageDiv.classList.add("fade-in");
    document.querySelector(".view-buttons").classList.remove("opacity-0");

    const clickedImgId = e.target.dataset.id;
    const clickedImgIndex = allImgSrcs.findIndex(
      (img) => img.id == clickedImgId
    );
    viewImageDiv.dataset.index = clickedImgIndex;
  }

  function handleViewerClick(e) {
    e.target.classList.remove("fade-in");
    document.querySelector(".view-buttons").classList.add("opacity-0");
  }

  function handlePrevClick(e) {
    e.target.style.transform = "translateX(-5px)";
    e.target.style.transform = "translateX(0)";
    const viewImageDiv = document.querySelector(".view-image");
    const prevImgIndex = Number(viewImageDiv.dataset.index) - 1;

    if (allImgSrcs[prevImgIndex]) {
      const prevIndexImageSrc = allImgSrcs[prevImgIndex].src;

      viewImageDiv.innerHTML = `<img src="${hostPath}/${prevIndexImageSrc}" />`;
      viewImageDiv.dataset.index = prevImgIndex;
    }
  }

  function handleNextClick(e) {
    const viewImageDiv = document.querySelector(".view-image");
    const nextImgIndex = Number(viewImageDiv.dataset.index) + 1;

    if (allImgSrcs[nextImgIndex]) {
      const nextIndexImageSrc = allImgSrcs[nextImgIndex].src;

      viewImageDiv.innerHTML = `<img src="${hostPath}/${nextIndexImageSrc}" />`;
      viewImageDiv.dataset.index = nextImgIndex;
    }
  }

  function formatDate(str) {
    return str.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$3-$2-$1');
  }

  return (
    <div className="defaultContainer my-5">
      <div
        className="view-image fixed left-0 top-0 h-full w-full bg-black bg-opacity-90 opacity-0 pointer-events-none transition-opacity"
        style={{zIndex:"2000"}}
        onClick={handleViewerClick}
      ></div>

      <div className="view-buttons text-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] flex items-center justify-between opacity-0 pointer-events-none" style={{zIndex:"2001"}}>
        <button
          onClick={handlePrevClick}
          className="view-prev h-10 w-10 p-2 rounded-full bg-gray-900 bg-opacity-50 pointer-events-auto"
          accessKey="h"
        >
          <ArrowLeftIcon />
        </button>
        <button
          onClick={handleNextClick}
          className="view-next h-10 w-10 p-2 rounded-full bg-gray-900 bg-opacity-50 pointer-events-auto"
        >
          <ArrowRightIcon />
        </button>
      </div>
      <h2 className=" mb-5" id="h2">
        <span>EVENTS</span>
      </h2>

      {searchParams.get("loc") && <Breadcrumbs />}

      {data.about ? (
        <div className="border-2 p-5 mb-10 rounded-lg">
            <h3 className="inner-heading secondaryHeading mb-3 hidden"></h3>

            {data.about && (
            <p
                className="events-about primaryParagraph mb-5"
                dangerouslySetInnerHTML={{ __html: data.about }}
            ></p>
            )}
        </div>
      ) : <h3 className="inner-heading secondaryHeading mb-3 hidden"></h3>}

      <div className="flex justify-center flex-wrap gap-3 events-grid">
        {data.folders &&
          data.folders.length > 0 &&
          data.folders.map((folder, index) => (
            <div
              className="events-folder"
              key={index}
              data-name={folder.name}
              onClick={(e) => handleFolderClick(e, folder.url)}
            >
              <FolderIcon className="events-folder-icon h-10" />
              <img
                className="events-folder-thumb h-full object-cover pointer-events-none"
                src={`${hostPath}/${folder.thumb}`}
                alt={folder.name}
              />
              <div className="events-folder-name p-2 text-center font-semibold">
                <p>{folder.name}</p>
                <p className="font-thin text-sm">{formatDate(folder.date)}</p>
              </div>
            </div>
          ))}

        {/* IMAGES */}
        {data.files &&
          data.files.length > 0 &&
          data.files.map(
            (file, index) =>
              file.type == "image" && (
                <div
                  key={index}
                  className="events-img-div shadow flex-grow flex-shrink h-72"
                >
                  <ArrowsPointingOutIcon className="events-img-icon h-10" />
                  <img
                    onClick={handleImageClick}
                    loading="lazy"
                    effect="blur"
                    className="events-img w-full h-72 object-cover object-top shadow"
                    src={`${hostPath}/${file.url}`}
                    alt=""
                    data-id={file.id}
                  />
                  <div className="hidden">
                    {allImgSrcs.push({
                      id: file.id,
                      src: file.url,
                    })}
                  </div>
                </div>
              )
          )}

        {/* VIDEOS */}
        {data.files &&
          data.files.length > 0 &&
          data.files.map(
            (file, index) =>
              file.type == "video" && (
                <div className="events-video-div h-72 flex-grow" key={index}>
                  <VideoCameraIcon className="events-video-icon h-10" />
                  <video
                    onMouseOver={(e) =>
                      e.target.setAttribute("controls", "controls")
                    }
                    onMouseOut={(e) => e.target.removeAttribute("controls")}
                    className="events-video h-full w-full object-cover rounded-xl"
                    src={`${hostPath}/${file.url}`}
                  ></video>
                </div>
              )
          )}
      </div>
    </div>
  );
}
