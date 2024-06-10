import React, { useEffect, useRef, useMemo, useState } from 'react';
import Globe from 'react-globe.gl';

const ClientSideGlobe = ({ pinsData }) => {
  const globeRef = useRef();
  const [selectedPin, setSelectedPin] = useState(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().enableZoom = false;
    }
  }, []);

  const { minUsers, maxUsers } = useMemo(() => {
    const userCounts = pinsData.map(pin => pin.user_count);
    return { minUsers: Math.min(...userCounts), maxUsers: Math.max(...userCounts) };
  }, [pinsData]);

  const getPinColor = (user_count) => {
    if (minUsers === maxUsers) {
      return `rgb(255, 0, 0)`; // Devuelve un color predeterminado si todos los usuarios tienen el mismo conteo
    }
    const percentage = (user_count - minUsers) / (maxUsers - minUsers);
    const colorValue = Math.round(255 * percentage);
    return `rgb(${255 - colorValue}, ${colorValue}, 0)`;
  };

  const getSize = (user_count) => {
    if (minUsers === maxUsers) {
      return 15; // Devuelve un tamaño predeterminado si todos los usuarios tienen el mismo conteo
    }
    const percentage = (user_count - minUsers) / (maxUsers - minUsers);
    const size = 15 - (percentage * 8); // Esto dará un tamaño entre 15 y 11, disminuyendo de 0.5 en 0.5
    return size;
  };

  return (
    <div style={{ width: '8%', height: '8%', marginTop: '0px' }}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        backgroundColor="rgba(255, 255, 255, 0)"
        htmlElementsData={pinsData}
        htmlElement={(d) => {
          const el = document.createElement('div');
          const pinColor = getPinColor(d.user_count);
          const size = getSize(d.user_count);

          el.innerHTML = `
            <div style="background: ${pinColor}; border-radius: 50%; width: ${size}px; height: ${size}px;"></div>
          `;
          el.style.position = 'absolute';
          el.style.transform = `translate(-${size / 2}px, -${size / 2}px)`;
          el.title = `${d.country}\nUsers: ${d.user_count}\nAvg. Satisfaction: ${d.avg_satisfaction.toFixed(2)}`;
          return el;
        }}
        onHtmlElementClick={(d) => {
          setSelectedPin(d);
          console.log(d);
        }}
        width={800}
        height={400}
      />
     
    </div>
  );
};

export default ClientSideGlobe;