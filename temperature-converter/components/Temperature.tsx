import {View,Text, Button} from 'react-native';
import {s} from '../App.style';
import InputTemp from './common/InputTemp/InputTemp';
import DisplayTemperature from './common/DisplayTemperature/DisplayTemperature';
import { UNIT,getOppositeUnit,temperatureConverter } from '../utils/temperature';
import ButtonConverter from './common/ButtonConverter/ButtonConverter';

export default function Temperature({inputValue,changeInput,unit,changeUnit}:{inputValue:number,changeInput:Function,unit:"°C"|"°F",changeUnit:Function}){
    const getOppositeUnitValue=getOppositeUnit(unit);
    const checkConvertedTemperature=()=>{
        if(isNaN(inputValue)){
            return 0;
        }else{
            return temperatureConverter(inputValue,getOppositeUnitValue);
        }
    }
    return(
        <View style={s.container}>
            <DisplayTemperature temperature={checkConvertedTemperature()} unit={getOppositeUnitValue}/>
            <InputTemp defaultValue={inputValue} changeTemp={changeInput} unit={unit}/>
            <ButtonConverter unit={unit} changeUnit={changeUnit}/>
        </View>
    );
}