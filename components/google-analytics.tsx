"use client"

import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import * as process from "process";

const GoogleAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default GoogleAnalytics;
