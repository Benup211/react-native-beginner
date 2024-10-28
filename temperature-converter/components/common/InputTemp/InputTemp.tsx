import { View, TextInput, Text } from "react-native";
import { s } from "./InputTemp.style";
export default function InputTemp({defaultValue,changeTemp,unit}:{defaultValue:number,changeTemp:Function,unit:string}) {
    return (
        <View style={s.root}>
            <TextInput
                style={s.input}
                maxLength={4}
                keyboardType="number-pad"
                placeholder="Type Your Temperature"
                defaultValue={defaultValue.toString()}
                onChangeText={(value)=>changeTemp(value)}
            />
            <Text style={s.unit}>{unit}</Text>
        </View>
    );
}
