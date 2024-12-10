import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./Weather data.json");
      const data = await response.json();
      setWeatherData(data.cities);
    };

    fetchData();
  }, []);

  return (
    <ImageBackground
      source={{ uri: "./Images/colorbackground.jpg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {weatherData.map((city, index) => (
          <View key={index}>
            <Text style={styles.city}>{city.name}</Text>
            <Text style={styles.temp}>{city.temperature}°F</Text>
            <Image
              style={styles.icon}
              source={{
                uri: "./Images/clouds.jpg",
              }}
            />
            <Text style={styles.description}>{city.condition}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Adjust resizeMode as needed (cover, contain, stretch)
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E3DAC9",
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",

    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    fontWeight: "bold",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
});
export default App;
