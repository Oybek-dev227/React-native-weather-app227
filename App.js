import {Alert, Keyboard, StyleSheet,} from 'react-native';
import Loader from "./components/loader";
import {useEffect, useState} from "react";
import Weather from "./components/weather";
import * as Location from 'expo-location';
import axios from "axios";


const API_KEY = '07efa9ee722629a2c4ed19644811220f';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState(null);

  const getWeather= async (latitude, longitude)=>{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    setLocation(data)
    setIsLoading(false)
  }

  const setWeather = async (query)=>{
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    setLocation(data)
    setIsLoading(false)
    Keyboard.dismiss()
  }


  //locatisiyani ushlab olish
  const getLocation = async()=>{
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission to access location was denied")
        return;
      }
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      getWeather(latitude,longitude)
    }catch (err){
      Alert.alert("I can't found your current position, so bad ):");
    }
  }
  //end

  useEffect(() => {
      getLocation();
  }, []);

  return isLoading ? <Loader/> : <Weather
                                          setWeather={setWeather}
                                          temp={location.main.temp}
                                          name={location.name}
                                          condition={location.weather[0].main}

  />;
}
