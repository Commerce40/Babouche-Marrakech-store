import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePixel = () => {
  let location;
  try {
    location = useLocation();
  } catch (error) {
    console.warn("usePixel must be used within a Router context.");
    location = null;
  }

  // Initialisation du Pixel (sera appelé dans App.jsx)
  const initPixel = (pixelId) => {
    if (typeof window !== 'undefined') {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', pixelId);
    }
  };

  // Suivi des pages vues
  useEffect(() => {
    if (location && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  // Fonction générique pour tracker les événements
  const trackEvent = (eventName, data = {}) => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, data);
      console.log(`📡 Pixel Event: ${eventName}`, data);
    }
  };

  return { initPixel, trackEvent };
};