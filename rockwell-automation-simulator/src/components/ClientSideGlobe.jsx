// components/ClientSideGlobe.js
import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const ClientSideGlobe = ({ pinsData }) => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().enableZoom = false;
    }
  }, []);

  return (
    <div style={{ width: '10%', height: '10%' }}>

      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        backgroundColor="rgba(255, 255, 255,0)"
        htmlElementsData={pinsData}
        htmlElement={(d) => {
          const el = document.createElement('div');
          el.innerHTML = `<div style="background: red; border-radius: 50%; width: 10px; height: 10px;"></div>`;
          el.style.color = 'white';
          el.style.width = '10px';
          el.style.height = '10px';
          el.style.background = 'red';
          el.style.borderRadius = '50%';
          el.title = d.country;
          return el;
        }}
        width={800}
        height={400}
      />
    </div>
  );
};

export default ClientSideGlobe;
