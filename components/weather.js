import React, {useState} from "react";
import {Button, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from '@expo/vector-icons';


const weatherOptions = {
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Ajoyib ob-havo☀️',
        description: 'Uyda utirmang juda ajoyib havo bulmoqda!😎',
    },

    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        title: 'Uyda qoling⛈️',
        description: "Ko'chada nima bulyotganini kurmayapsizmi?😥",
    },

    Drizzle:{
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Take an umbrella☔',
        description: "Tez orada yomg'ir tezlashib ketishi mumkin🌧️",
    },

    Rain:{
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        title: "Kuchada yomg'ir yog'yapti🌧️",
        description: "Tez orada Kamalak chiqadishi mumkin🌈",
    },

    Snow:{
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        title: "Bugun kuchada qor yog'moqda uree🌨️",
        description: "Qalinroq keyinib oling va qorbobolar yasang☃️",
    },

    Dust:{
        iconName: 'weather-windy-variant',
        gradient: ['#B79891', '#94716B'],
        title: "Kucha chang tuzon😒",
        description: "Eshik va derazalarni qattiqroq yopib oling🪟",
    },

    Smoke:{
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        title: "Kucha tutun😒",
        description: "Mening maslahatim zaruriyat bulmasa uchaga chiqmang🏡",
    },

    Haze:{
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: "Kucha bir oz qor yogmoqda❄️",
        description: "Kuchaga chiqadigan bulsangiz qalinroq keyining😊",
    },

    Mist:{
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        title: "Tumanda hech narsani ko'ra olmaysiz🌫️",
        description: "Kuchaga nima bulyatganini ko'ryapsizmi😨",
    },

    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Bu kun Bulutliy☁️',
        description: 'Uyda utiring qitmir havo bulmoqda!😒',
    },
};

export default function Weather({temp, name, condition, setWeather}) {

    const [query, setQuery] = useState("");
    return (
        <LinearGradient colors={weatherOptions[condition].gradient}
                        style={styles.mainContainer}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={styles.container}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color={"white"}/>
                <View style={styles.flex}>
                    <Text style={styles.temp}>{temp}°</Text>
                    <Text style={styles.temp}>| {name}</Text>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput placeholder={"Davlat yoki Viloyat"} style={styles.input} value={query} onChangeText={e=>setQuery(e)}/>
                    <Button title={'Search'} style={styles.btn} onPress={()=>setWeather(query)}/>
                </View>
            </View>
            <View style={{...styles.container, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.description}>{weatherOptions[condition].description}</Text>
            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    temp:{
        fontSize: 42,
        color: 'white',
    },

    flex:{
        flexDirection:'row',
        alignItems:'center',
    },

    textContainer:{
        paddingHorizontal:40,
        flex:1,
    },

    title:{
        color:'white',
        fontSize:36,
        fontWeight:'300',
        marginBottom: 10,
        textAlign:'left',

    },

    description:{
        color:'white',
        fontSize:24  ,
        fontWeight:'600',
        textAlign:'left',
    },

    searchContainer:{
        backgroundColor:'#e8e8e8',
        width: '80%',
        padding: 10,
        marginTop:80,
        position:'relative',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:7,
    },

    input:{
        width:'70%',

    },

    btn:{
        width:'30%',

    },

})
