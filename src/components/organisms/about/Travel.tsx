'use client';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import Am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_italyLow from '@amcharts/amcharts5-geodata/italyLow';
import am5geodata_ukLow from '@amcharts/amcharts5-geodata/ukLow';
import am5geodata_usaLow from '@amcharts/amcharts5-geodata/usaLow';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import { Checkbox, FormGroup } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useLayoutEffect, useState } from 'react';

import {
  citiesVisited,
  countriesVisited,
  italyVisitedRegions,
  ukVisitedRegions,
  usStatesVisited,
} from '@/data/about/travel/data';

const Travel = () => {
  const [showCities, setShowCities] = useState(false);

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([Am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        projection: am5map.geoNaturalEarth1(),
        homeZoomLevel: 2,
        homeGeoPoint: { longitude: 11, latitude: 45 },
      }),
    );

    chart.set('zoomControl', am5map.ZoomControl.new(root, {}));

    const worldSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
        fill: am5.color('#E1E1E1'),
        opacity: 0.75,
      }),
    );

    const worldVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        include: countriesVisited.map((country) => country.id),
        exclude: ['US', 'IT', 'GB'],
        fill: am5.color('#8FC8E3'),
        opacity: 0.9,
      }),
    );

    const usaVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaLow,
        include: usStatesVisited.map((state) => state.id),
        fill: am5.color('#309ECC'),
        opacity: 0.9,
      }),
    );

    const italyVisitedSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_italyLow,
        include: italyVisitedRegions.map((region) => region.id),
        fill: am5.color('#309ECC'),
        opacity: 0.9,
      }),
    );

    const ukSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_ukLow,
        include: ukVisitedRegions,
        fill: am5.color('#309ECC'),
        opacity: 0.9,
      }),
    );

    const citySeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: 'lat',
        longitudeField: 'lon',
      }),
    );

    citySeries.data.setAll(citiesVisited);

    if (showCities) {
      citySeries.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 4,
            fill: am5.color('#ffba00'),
            tooltipText: '{name}',
          }),
        });
      });
    }

    worldSeries.events.on('datavalidated', function () {
      chart.goHome();
    });

    worldVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    usaVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    italyVisitedSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    ukSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
    });

    return () => {
      root.dispose();
    };
  }, [showCities]);

  return (
    <>
      <div id='chartdiv' className='w-full h-[400px]'></div>

      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={showCities}
                onChange={() => setShowCities(!showCities)}
              />
            }
            label='Show Cities'
          />
        </FormGroup>
      </div>
    </>
  );
};

export default Travel;
