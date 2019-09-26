import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

class App extends Component {
  state = {
    latitude: 32.082466,
    longitude: 72.669128,
    error: null,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    description: "Sargodha"
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,

          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000 }
    );
  }

  render() {
    const {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
      description
    } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitudeDelta,
            longitudeDelta: longitudeDelta
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude
            }}
            title="TechNDevs"
            description={description}
          />
        </MapView>
      </View>
    );
  }
}

export default App;
