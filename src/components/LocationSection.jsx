import React from 'react';
import './LocationSection.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useLanguage } from './LanguageWrapper';

const serviceAreas = [
  { name: { en: 'Northbrook', tw: 'Northbrook' }, coords: [42.1275, -87.8289] },
  { name: { en: 'Glenview', tw: 'Glenview' }, coords: [42.0723, -87.8150] },
  { name: { en: 'Northfield', tw: 'Northfield' }, coords: [42.1011, -87.7712] },
  { name: { en: 'Lake Forest', tw: 'Lake Forest' }, coords: [42.2586, -87.8406] },
  { name: { en: 'Winnetka', tw: 'Winnetka' }, coords: [42.1081, -87.7359] },
  { name: { en: 'Wilmette', tw: 'Wilmette' }, coords: [42.0723, -87.7228] },
];

const locationText = {
  en: {
    heading: 'Serving the Chicago North Shore Community',
    caption: 'Providing in-person lessons across the Chicago North Shore suburbs and virtual lessons throughout the greater Chicagoland area.'
  },
  tw: {
    heading: '服務芝加哥北郊社區',
    caption: '提供芝加哥北郊地區面授課程，並於大芝加哥地區提供線上課程。'
  }
};

// Fix default marker icon for leaflet in React
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const LocationSection = () => {
  const { language } = useLanguage();
  // Map zh to tw since we're using /tw in the URL
  const langKey = language === 'zh' ? 'tw' : language;
  const t = locationText[langKey];
  return (
    <section className="location-section">
      <h2>{t.heading}</h2>
      <div className="location-map-container">
        <MapContainer
          center={[42.13, -87.8]}
          zoom={11}
          scrollWheelZoom={false}
          style={{ width: '100%', height: 320, borderRadius: 14 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceAreas.map((area, idx) => (
            <Marker key={area.name.en} position={area.coords} icon={markerIcon}>
              <Popup>{area.name[language]}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="location-caption">
        {t.caption}
      </div>
    </section>
  );
};

export default LocationSection; 