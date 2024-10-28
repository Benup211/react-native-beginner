type UNITType= {
    Celsius: "°C";
    Fahrenheit: "°F";
};

const UNIT: UNITType = {
    Celsius: "°C",
    Fahrenheit: "°F"
};
const temperatureConverter=(temperature:number,convertTo:UNITType["Celsius"]|UNITType['Fahrenheit'])=>{
    if(convertTo === UNIT.Celsius){
        return (temperature-32)/1.8;
    }else if(convertTo === UNIT.Fahrenheit){
        return (temperature*1.8)+32;
    }else{
        throw new Error("Invalid Input");
    }
}

const getOppositeUnit=(unit:UNITType["Celsius"]|UNITType['Fahrenheit'])=>{
    return unit===UNIT.Celsius ? UNIT.Fahrenheit : UNIT.Celsius;
}

const isIceBackground=(temperature:number,unit:UNITType["Celsius"]|UNITType['Fahrenheit'])=>{
    if(unit===UNIT.Celsius){
        return temperature<=0;
    }else if(unit===UNIT.Fahrenheit){
        return temperature<=32;
    }else{
        throw new Error("Invalid Unit");
    }
}

export {UNIT,temperatureConverter,getOppositeUnit,isIceBackground};