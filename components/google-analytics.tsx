"use client"

import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const GoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default GoogleAnalytics;
