import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Context } from "../context/AppContext";
import { INITIAL_LATITUDE, INITIAL_LONGITUDE } from "../utils/helper";

class TrackDoggos extends Component {
  state = {
    coordinates: [],
    dogBreeds: [],
  };
  static contextType = Context;

  componentDidMount() {
    const appContext = this.context;

    const { selectBreedName, breeds } = appContext;

    const { loading, error, data } = breeds;

    const breedList = Object.keys(data).map((name, index) => name);

    // Generate 50 random coordinates within a square region
    const coordinates = Array.from({ length: breedList.length }, () => ({
      lat: INITIAL_LATITUDE + Math.random() * 0.3,
      lng: INITIAL_LONGITUDE + Math.random() * 0.2,
    }));

    // Assign random dog breeds to each coordinate

    const dogBreeds = coordinates.map(
      () => breedList[Math.floor(Math.random() * breedList.length)]
    );

    this.setState({ coordinates, dogBreeds });
  }

  render() {
    const { coordinates, dogBreeds } = this.state;
    const { google } = this.props;

    let color = ["blue", "green", "yellow", "red", "purple", "pink", "black"];

    let randomColorPicker = color[Math.floor(Math.random() * color.length)];

    return (
      <div className="w-11/12 relative m-auto mt-5 rounded h-[30rem] text-center">
        <Map
          google={google}
          zoom={12}
          initialCenter={{ lat: INITIAL_LATITUDE, lng: INITIAL_LONGITUDE }}
        >
          {coordinates.map((coordinate, i) => (
            <Marker
              key={i}
              position={coordinate}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: (() => {
                  switch (dogBreeds[i]) {
                    case dogBreeds[i] === dogBreeds[1]:
                      return randomColorPicker;
                    case dogBreeds[i] === dogBreeds[2]:
                      return randomColorPicker;
                    case dogBreeds[i] === dogBreeds[3]:
                      return randomColorPicker;
                    case dogBreeds[i] === dogBreeds[4]:
                      return randomColorPicker;
                  }
                })(),
                fillOpacity: 1,
                strokeWeight: 0,
                scale: 7,
              }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
})(TrackDoggos);
