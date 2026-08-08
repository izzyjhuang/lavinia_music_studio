import React from 'react';
import { useLocation } from 'react-router-dom';

// Set REACT_APP_GA_ID in Netlify (Site configuration -> Environment variables)
// and redeploy. With no value set this component does nothing at all, so the
// site works identically with or without analytics configured.
const GA_ID = process.env.REACT_APP_GA_ID;

const Analytics = () => {
  const { pathname } = useLocation();
  const injected = React.useRef(false);

  React.useEffect(() => {
    // window.__PRERENDER__ is set by scripts/prerender.js. Without this guard
    // every build would register 18 visits from the build machine.
    if (!GA_ID || injected.current || window.__PRERENDER__) return;
    injected.current = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    // Page views are sent manually below so client-side navigation is counted.
    window.gtag('config', GA_ID, { send_page_view: false });
  }, []);

  React.useEffect(() => {
    if (!GA_ID || !window.gtag || window.__PRERENDER__) return;
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
};

export default Analytics;
