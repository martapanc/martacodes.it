'use client';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import Am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import { useLayoutEffect } from 'react';

const Travel = () => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([Am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoNaturalEarth1(),
        // minZoomLevel: 1,
        // maxZoomLevel: 16
        // zoomStep: 1,
        homeZoomLevel: 2,
        homeGeoPoint: { longitude: 9, latitude: 45 },
        // wheelSensitivity: 0.5
      }),
    );

    chart.set('zoomControl', am5map.ZoomControl.new(root, {}));

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      }),
    );

    polygonSeries.events.on('datavalidated', function () {
      chart.goHome();
    });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <>
      <div id='chartdiv' className='w-full h-[400px]'></div>
    </>
  );
};

export default Travel;
