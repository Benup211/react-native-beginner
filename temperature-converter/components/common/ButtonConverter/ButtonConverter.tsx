import { TouchableOpacity,Text } from "react-native";
import {getOppositeUnit } from "../../../utils/temperature";
import {s} from './ButtonConverter.style';
export default function ButtonConverter({unit,changeUnit}:{unit:"°C"|"°F",changeUnit:Function}){
    return(
        <TouchableOpacity onPress={()=>changeUnit(getOppositeUnit(unit))} style={s.button}>
            <Text style={s.buttonTxt}>Convert To {unit}</Text>
        </TouchableOpacity>
    );
}