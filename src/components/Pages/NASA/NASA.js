import React, { useState, useEffect } from "react";
import "./NASA.css";
import NASAicon from "./NASA-icon.png";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

export default function NASA() {
    const [photoData, setPhotoData] = useState(null);
  
    useEffect(() => {
      fetchPhoto();
  
      async function fetchPhoto() {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );
        const data = await res.json();
        setPhotoData(data);
      }
    }, []);
  
    if (!photoData) return <div />;
  
    return (
        <>
        <div className="NASA">
            <div className="tc gallery bg-light-green pa2 br4 fl w-100 shadow-3">
                <h1 className="dib pa2">Astronomy Picture Of The Day</h1>
                <img id="NASAIcon" src={NASAicon} alt="" width="90px" height="90px"/>
                <div className="bg-washed-green pa2 br4">
                    <h2 className="fl w-100">{photoData.title}</h2>
                    <p className="date">{photoData.date}</p>
                    <div className="nasa-photo">
                        {photoData.media_type === "image" ? (
                            <img
                            src={photoData.url}
                            alt={photoData.title}
                            className="photo br4"
                            />
                        ) : (
                            <iframe
                            title="space-video"
                            src={photoData.url}
                            frameBorder="0"
                            gesture="media"
                            allow="encrypted-media"
                            allowFullScreen
                            className="photo"
                            />
                        )}
                        <p className="explanation pa3">{photoData.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

