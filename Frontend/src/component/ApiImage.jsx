import React, { useEffect, useState } from 'react';
import arrow from "../assets/arrow-right-circle.svg";

function ApiImage({ apiUrl, width, height}){
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch image');
        const blob = await response.blob();
        const imageObjectUrl = URL.createObjectURL(blob);
        setImageSrc(imageObjectUrl);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImage();
  }, [apiUrl]);

  if (!imageSrc) return <img src={arrow} style={{width:{width},display:'block'}} />;
  if (error) return <p>Error loading image: {error}</p>;
  

  return (
    <>
    {!imageSrc?<img
      src={imageSrc}
      alt="Fetched from API"
      style={{ width: `${width}px`, height: `${height}px`, objectFit: 'cover' }}
    />:<img src={arrow} style={{width:width, height:height}} />}
    </>
  );
};

export default ApiImage;