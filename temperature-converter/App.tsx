import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {s} from "./App.style";
import Temperature from "./components/Temperature";
import { ImageBackground, View, Text } from "react-native";
import hotImg from "./assets/hot.png";
import coldImg from "./assets/cold.png";
import { useEffect, useState } from "react";
import {isIceBackground} from './utils/temperature';
export default function App() {
    const [inputValue,setInputValue]=useState(0)
    const [currentUnit,setCurrentUnit]=useState<"°C"|"°F">("°C")
    const [currentBackground,setCurrentBackground]=useState(coldImg);
    useEffect(()=>{
        setCurrentBackground(isIceBackground(inputValue,currentUnit)?coldImg:hotImg);
    },[inputValue,currentUnit])
    return (
        <ImageBackground style={s.backgroundImg} source={currentBackground}>
            <SafeAreaProvider>
                <SafeAreaView style={s.root}>
                    <Temperature inputValue={inputValue} changeInput={setInputValue} unit={currentUnit} changeUnit={setCurrentUnit}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}
