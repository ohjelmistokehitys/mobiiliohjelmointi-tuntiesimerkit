/**
 * Kaupunkipyöräasemien lähde: Helsingin Seudun Liikenteen (HSL) kaupunkipyöräasemat
 * https://hri.fi/data/fi/dataset/hsl-n-kaupunkipyoraasemat/resource/eed64d92-c63a-412a-aab9-e006aea49732
 *
 * Lisenssi: Creative Commons Nimeä 4.0
 */

import { useEffect, useState } from 'react';
import MapView, { Marker, LatLng } from 'react-native-maps';

const BIKE_STATION_JSON_URL = "https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.geojson";

type BikeStation = {
    properties: {
        ID: string,
        Osoite: string,
        Nimi: string
    },
    geometry: {
        coordinates: [number, number];
    }
};


async function getBikeStations(): Promise<BikeStation[]> {
    const response = await fetch(BIKE_STATION_JSON_URL);
    if (!response.ok) {
        console.log(response);
        throw new Error(`Received status code ${response.status}`);
    }
    const json = await response.json();
    return json.features;
}


export default function MapScreen() {

    const [bikeStations, setBikeStations] = useState<BikeStation[]>([]);
    const campus: LatLng = {
        latitude: 60.201373,
        longitude: 24.934041
    };

    useEffect(() => {
        getBikeStations().then(stations => setBikeStations(stations));
    }, []);


    return <MapView
        style={{ width: '100%', height: '100%' }}
        region={{
            ...campus,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0221,
        }}>
        <Marker
            title="Haaga-Helia"
            description="Ratapihantie 13"
            coordinate={campus} />

        {bikeStations.map(station => {
            const [longitude, latitude] = station.geometry.coordinates;

            return <Marker
                title={station.properties.Nimi}
                description={station.properties.Osoite}
                key={station.properties.ID}
                coordinate={{ latitude, longitude }} />
        })}
    </MapView>;
}