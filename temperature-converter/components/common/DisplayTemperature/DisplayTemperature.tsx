import { View,Text } from "react-native";
import { s } from "./DisplayTemperature.style";
export default function DisplayTemperature({temperature,unit}:{temperature:number,unit:string}){
    return(
        <Text style={s.temperatureTxt}>
            {temperature.toFixed(1)} {unit}
        </Text>
    );
}